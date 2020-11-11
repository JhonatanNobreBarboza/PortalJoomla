'use strict'

const Posts = use('App/Models/Proj_Post')

class PostController {
    async index({ request, response, view }) {
        const postagens = await Posts.all();
        return postagens;
    }
    async store({ request, response, view }) {
        const data = request.only(["titulo", "subtitulo", "conteudo"]);
        const postagens = await Posts.create(data);
        return postagens;
    }
    async update({ params, request, response }) {
        const postagem = await Posts.findOrFail(params.id);
        const data = request.only(["titulo", "subtitulo", "conteudo"]);

        postagem.merge(data);
        await postagem.save();

        return postagem
    }
    async destroy({ params, request, response }) {
        const postagem = await Posts.findOrFail(params.id);
        await postagem.delete();
    }

}
module.exports = PostController;
