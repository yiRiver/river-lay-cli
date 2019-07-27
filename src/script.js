// import { River } from './river.js';
import { River } from '../node_modules/river-lay/index.js';
import Modal from './modules/modal.js';
import Transfer from './modules/transfer.js';

console.log(River)
new River({
    modules: ['modal', 'transfer']
});


let modal = new Modal({
    title: '哈哈哈',
    content: $('p'),
    onClose: data => {
        console.log(data)
    }
});
$('.btn-success').click(function() {
    modal.show();
})
$('.btn-danger').click(function() {
    modal.close();
})
new Transfer();