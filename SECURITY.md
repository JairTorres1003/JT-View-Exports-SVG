# Security Policy

> **Note**: View Exports SVG is a passion project developed and maintained in spare time. While security is taken seriously, this project does not have dedicated full-time support. Updates and new features are implemented as time becomes available.

## Supported Versions

This project is maintained as a passion project with updates released as time permits. We recommend always using the latest version:

| Version | Supported          | Notes                                    |
| ------- | ------------------ | ---------------------------------------- |
| 4.x     | :white_check_mark: | Current stable release - recommended     |
| 3.x     | :x:                | No longer maintained - please upgrade    |
| 2.x     | :x:                | End of life - please upgrade             |
| < 2.0   | :x:                | No longer supported                      |

## Reporting a Vulnerability

We take the security of View Exports SVG seriously. If you discover a security vulnerability, please follow these steps:

### 1. **Do Not** Publicly Disclose

Please do not publicly disclose the vulnerability until we've had a chance to address it. Avoid creating public GitHub issues for security vulnerabilities.

### 2. Report Privately

Report security vulnerabilities by:

- **Email**: Send details to the repository owner (check GitHub profile for contact)
- **Security Advisory**: Create a private security advisory on [GitHub Security Advisories](https://github.com/JairTorres1003/JT-View-Exports-SVG/security/advisories/new)
- **GitHub Issue**: If private communication is not possible, create an [issue](https://github.com/JairTorres1003/JT-View-Exports-SVG/issues/new) with `[SECURITY]` prefix

### 3. Include Details

When reporting, please include:

- **Description**: Clear explanation of the vulnerability
- **Impact**: What could an attacker accomplish?
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **VS Code Version**: Which version(s) of VS Code are affected
- **Extension Version**: Which version(s) of the extension are affected
- **Environment**: Operating system and any relevant configuration
- **Proof of Concept**: If possible, include code or screenshots

### 4. Response Timeline

**Note**: This is a passion project maintained in my spare time. While I take security seriously, response times may vary based on availability:

- **Acknowledgment**: Typically within 7 days of report
- **Initial Assessment**: Within 2-3 weeks when time permits
- **Status Updates**: As progress is made
- **Fix Release**: Depending on severity and complexity, critical issues will be prioritized

For critical vulnerabilities, I will make every effort to respond and patch as quickly as possible.

## Security Best Practices

When using View Exports SVG:

- Always use the latest version of the extension
- Keep VS Code updated to the latest stable version
- Review extension permissions and settings
- Be cautious when using custom SVG assets from untrusted sources
- Report any suspicious behavior immediately

## Scope

This security policy covers:

- The core extension code (src/)
- Web client interface (client/)
- Documentation site (docs/)
- Build and deployment scripts

## Exclusions

The following are typically **not** considered security vulnerabilities:

- Issues that require physical access to a user's machine
- Social engineering attacks
- Issues in third-party dependencies already reported upstream
- Feature requests or usability issues

## Security Updates

Security patches will be prioritized and released based on severity:

- **Critical**: Prioritized for immediate release when time permits
- **High**: Addressed in next available update
- **Medium/Low**: Included in planned feature releases

Development and updates occur as time allows. For urgent security issues, consider forking the repository and submitting a pull request with a fix.

## Thank You

We appreciate the security research community's efforts to responsibly disclose vulnerabilities. Contributors who report valid security issues will be acknowledged in the release notes (unless they prefer to remain anonymous).

**Community Contributions Welcome**: As this is a passion project, pull requests with security fixes are especially appreciated and will be reviewed promptly. Your contributions help make this extension better for everyone.

Thank you for helping keep View Exports SVG and its users safe!
