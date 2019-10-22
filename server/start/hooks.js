'use strict'

const { hooks } = require('@adonisjs/ignitor')                                                                                                   
                                                                                                                                                 
hooks.after.httpServer(() => {                                                                                                                   
    const Response = use('Adonis/Src/Response')      
  
    Response.macro('Success', function (data) {                                                                                                     
        this.status(200).send({
            status_code: 0,
            error: null,
            success: {data: data}
        }) 
    })

    Response.macro('ValidationFailed', function (data) {                                                                                                     
        this.status(400).send({
            status_code: 100,
            error: {data: data},
            success: null
        })                                                                                                             
    })    

    Response.macro('Error', function (data) {                                                                                                     
        this.status(500).send({
            status_code: 101,
            error: {data: data},
            success: null
        })                                                                                                             
    })                                                                                                                                          
})