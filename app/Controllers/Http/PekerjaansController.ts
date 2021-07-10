import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PekerjaansController {
  public async index(ctx:HttpContextContract){
    ctx.response.json({nama:"adit",pekerjaan:"programmer"})
  }
}
