import { RiverLay } from '../../node_modules/river-lay/index.js';

class Modal extends RiverLay {
    constructor(opts) {
        super();
        this.opts = opts;
        this.title = opts.title;
        this.content = opts.content;
        this.onClose = opts.onClose;
        this.init();
        return this;
    }

    init() {
        this.templAppend();
        this.closeCb();
    }

    templStr() {
        return `
            <div class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close m-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">${this.title}</h4>
                        </div>
                        <!-- content -->
                        <div class="modal-body">
                            ${this.content[0]}
                        </div>
                        <!-- footer -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default m-close" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary m-close">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    templAppend() {
        let str = this.templStr();
        let component = this.createComponent(str);

        this.component = component;
        document.getElementsByTagName('body')[0].appendChild(component);
    }

    closeCb() {
        let _this = this;
        $('.m-close').click(() => {
            this.onClose(_this);
            this.close();
        })
    }

    modalShow() {

    }

    show() {
        this.component.firstElementChild.style.display = 'block';
    }
    
    close() {
        this.component.firstElementChild.style.display = 'none';
    }
}

export default Modal; 