import * as vsc from 'vscode'

// ─── Types ───────────────────────────────────────────────────────────────────

interface SubOperation {
  name: string
  startTime: number
  startMemory: number | null
}

interface SubOperationResult {
  name: string
  duration: number
  memoryDelta: number | null
}

interface OperationResult {
  name: string
  duration: number
  memoryDelta: number | null
  subOperations: SubOperationResult[]
}

interface BenchmarkReport {
  operations: OperationResult[]
}

// ─── Output Channel ──────────────────────────────────────────────────────────

let _outputChannel: vsc.OutputChannel | null = null

function getOutputChannel(): vsc.OutputChannel {
  if (!_outputChannel) {
    _outputChannel = vsc.window.createOutputChannel('Benchmark')
  }
  return _outputChannel
}

// ─── Memory helper ───────────────────────────────────────────────────────────

/**
 * Returns current heap usage in MB, or null in environments where
 * process.memoryUsage is not available (e.g. VSCode Web).
 */
function getMemoryMB(): number | null {
  try {
    if (typeof process !== 'undefined' && typeof process.memoryUsage === 'function') {
      return process.memoryUsage().heapUsed / 1024 / 1024
    }
  } catch {
    // VSCode Web — not available
  }
  return null
}

// ─── Benchmark ───────────────────────────────────────────────────────────────

export class Benchmark {
  private operations: OperationResult[] = []
  private activeOperation: {
    name: string
    startTime: number
    startMemory: number | null
    subOperations: SubOperationResult[]
  } | null = null
  private activeSubOperation: SubOperation | null = null

  /**
   * Starts a new named operation.
   * Any previous operation must have been ended before calling this.
   */
  startOperation(name: string): this {
    if (this.activeOperation) {
      console.warn(
        `[Benchmark] Operation "${this.activeOperation.name}" was not ended before starting "${name}".`
      )
      this.endOperation()
    }

    this.activeOperation = {
      name,
      startTime: performance.now(),
      startMemory: getMemoryMB(),
      subOperations: [],
    }

    return this
  }

  /**
   * Ends the current active operation and records its result.
   */
  endOperation(): this {
    if (!this.activeOperation) {
      console.warn('[Benchmark] endOperation called without a matching startOperation.')
      return this
    }

    if (this.activeSubOperation) {
      console.warn(`[Benchmark] Sub-operation "${this.activeSubOperation.name}" was not ended.`)
      this.endSubOperation()
    }

    const duration = performance.now() - this.activeOperation.startTime
    const endMemory = getMemoryMB()
    const memoryDelta =
      this.activeOperation.startMemory !== null && endMemory !== null
        ? endMemory - this.activeOperation.startMemory
        : null

    this.operations.push({
      name: this.activeOperation.name,
      duration,
      memoryDelta,
      subOperations: this.activeOperation.subOperations,
    })

    this.activeOperation = null
    return this
  }

  /**
   * Starts a named sub-operation within the current active operation.
   * Sub-operations are optional and can be used to measure internal steps.
   */
  startSubOperation(name: string): this {
    if (!this.activeOperation) {
      console.warn(`[Benchmark] startSubOperation "${name}" called without an active operation.`)
      return this
    }

    if (this.activeSubOperation) {
      console.warn(
        `[Benchmark] Sub-operation "${this.activeSubOperation.name}" was not ended before starting "${name}".`
      )
      this.endSubOperation()
    }

    this.activeSubOperation = {
      name,
      startTime: performance.now(),
      startMemory: getMemoryMB(),
    }

    return this
  }

  /**
   * Ends the current active sub-operation and records its result.
   */
  endSubOperation(): this {
    if (!this.activeSubOperation || !this.activeOperation) {
      console.warn('[Benchmark] endSubOperation called without a matching startSubOperation.')
      return this
    }

    const duration = performance.now() - this.activeSubOperation.startTime
    const endMemory = getMemoryMB()
    const memoryDelta =
      this.activeSubOperation.startMemory !== null && endMemory !== null
        ? endMemory - this.activeSubOperation.startMemory
        : null

    this.activeOperation.subOperations.push({
      name: this.activeSubOperation.name,
      duration,
      memoryDelta,
    })

    this.activeSubOperation = null
    return this
  }

  /**
   * Prints the benchmark report to the dedicated VSCode Output Channel.
   * Calling print() resets the internal state for the next benchmark run.
   */
  print(): this {
    const channel = getOutputChannel()
    const report = this._buildReport()

    channel.appendLine('')
    channel.appendLine('━'.repeat(60))
    channel.appendLine(`  BENCHMARK — ${new Date().toLocaleTimeString()}`)
    channel.appendLine('━'.repeat(60))

    for (const op of report.operations) {
      channel.appendLine('')
      channel.appendLine(`  ▶ ${op.name}`)
      channel.appendLine(`    Duration : ${op.duration.toFixed(2)} ms`)

      if (op.memoryDelta !== null) {
        const sign = op.memoryDelta >= 0 ? '+' : ''
        channel.appendLine(`    Memory   : ${sign}${op.memoryDelta.toFixed(3)} MB`)
      }

      if (op.subOperations.length > 0) {
        channel.appendLine('    Sub-operations:')
        for (const sub of op.subOperations) {
          channel.appendLine(`      • ${sub.name}`)
          channel.appendLine(`        Duration : ${sub.duration.toFixed(2)} ms`)
          if (sub.memoryDelta !== null) {
            const sign = sub.memoryDelta >= 0 ? '+' : ''
            channel.appendLine(`        Memory   : ${sign}${sub.memoryDelta.toFixed(3)} MB`)
          }
        }
      }
    }

    channel.appendLine('')
    channel.appendLine('━'.repeat(60))
    channel.show(true) // true = no le roba el foco al editor

    // Reset para el siguiente uso
    this.operations = []
    return this
  }

  private _buildReport(): BenchmarkReport {
    return { operations: [...this.operations] }
  }
}

// Instancia compartida — úsala como singleton o crea instancias locales según necesites
export const benchmark = new Benchmark()
