'use strict'

const Post = use('App/Models/Post')

class PostController {
    async post({ request }) {

        const dataToCreate = request.only(['titulo', 'subtitulo', 'conteudo']);
    
        return await Course.create(dataToCreate);
    
    }

}

Route.post('/posts', 'PostController.store');
