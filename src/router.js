import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Filme from './components/Filme';
import EditarFilme from './components/EditarFilme';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/carrinho',
            name: 'carrinho',
            component: Carrinho
        },
        {
            path: '/filme/:id',
            name: 'filme',
            component:Filme,
            children: [
                {
                    path: 'edit',
                    name: 'editar-filme',
                    component: EditarFilme
                }
            ]
        }
    ]


});