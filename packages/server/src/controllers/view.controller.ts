// @ts-types="npm:@types/express@4.17.15"

export class ViewController {
  public changeRenderPath = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Render path changed successfully', path: req.body.data })
  }
}
