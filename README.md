# hello-world-adonis
## install adonis
```
npm init adonis-ts-app@latest hello-world
```

## menjalankan aplikasi di lokal
```
node ace serve --watch  
```

## membuat controller(menjadi UsersController)
```
node ace make:controller User
```

## membuat controller(menjadi Users)
```
node ace make:controller User --exact (*atau -e)
```

## install package ORM( Object Relational Mapping )
```
npm i @adonisjs/lucid
```

## konfigurasi ORM
```
node ace configure @adonisjs/lucid
```

## membuat migration guna mempermudah berbagi schema dari databasenya dan juga mempermudah dalam memodifikasi skema
```
node ace make:migration users
```

## untuk menjalankan migration
```
node ace migration:run
```
## untuk membuat Model
```
node ace make:model User
```
