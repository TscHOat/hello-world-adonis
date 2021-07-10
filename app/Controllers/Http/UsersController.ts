import { Response } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index(ctx:HttpContextContract){
    ctx.response.json(await User.all())
  }
  public async store(ctx:HttpContextContract){
    const { nama,alamat,telp } = ctx.request.all()
    let user = new User()
    user.nama = nama
    user.alamat = alamat
    user.telp = telp
    user.save()
    return ctx.response.json(user)
  }
  public async delete(ctx:HttpContextContract){
    let user = await User.findOrFail(ctx.request.all().id)
    await user.delete()
    return ctx.response.json(await User.all())
  }
  public async find(ctx:HttpContextContract){
    return ctx.response.json(await User.findOrFail(ctx.request.all().id))
  }
  public async update(ctx:HttpContextContract){
    var user = await User.findOrFail(ctx.request.all().id)
    user.nama = ctx.request.all().nama
    user.alamat = ctx.request.all().alamat
    user.save()
    return ctx.response.json(user)

  }
  public async output(ctx:HttpContextContract){
    return ctx.response.json(ctx.request.all())
  }

}
