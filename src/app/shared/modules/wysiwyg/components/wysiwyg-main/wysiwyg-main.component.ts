import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// import { MediaFileUpload, MediaUploadStatus, MediaFileDetails } from '../../../manage-media-file/classes/media-file-upload';
// import { AppService } from '../../../../services/app.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';


declare var $: any;
declare var tinymce: any;

@Component({
  selector: 'wysiwyg-main',
  templateUrl: './wysiwyg-main.component.html',
  styleUrls: ['./wysiwyg-main.component.css']
})
export class WysiwygMainComponent implements OnInit {
  @Input() tinyID: string;
  @Input() value: string;
  @Input() config: WysiwygConfig;
  @ViewChild('textareaWrap') textareaWrap: ElementRef;
  @Output('onChange') onWysiwygChange = new EventEmitter<any>();

  tinymceID: string;
  editor: any;
  // appConfig = appConfig;
  isEmpty: boolean = false;
  constructor(
    // private appService: AppService
  ) { }

  ngOnInit() {
    this.tinymceID = "mymce_" + this.tinyID;
    if (this.config == undefined) {
      this.config = new WysiwygConfig;
    }

    if (this.value == '') {
      this.isEmpty = true;
    }
  }

  ngAfterViewInit() {
    if ($("#" + this.tinymceID, this.textareaWrap.nativeElement).length > 0) {
      this.inittinymce();
    }
  }

  inittinymce() {
    var self = this;
    tinymce.execCommand("mceRemoveEditor", true, this.tinymceID);
    tinymce.init({
      selector: "#" + this.tinymceID,
      theme: "modern",
      menubar: false,
      statusbar: false,
      plugins: this.config.plugins,
      toolbar: this.config.toolbar,
      setup: (ed) => {
        this.editor = ed;
        ed.on('change', (e) => {
          this.wysiwygChange();
        });
        if (this.config.showOnfocus) {
          ed.on('focus', function () {
            $(this.contentAreaContainer.parentElement).find("div.mce-toolbar-grp").show();
            $('.mce-container').removeClass('lost-foucus');
          });
          ed.on('click', function () {
            self.editor.focus();
          })
          ed.on('blur', function () {
            var text = self.editor.getContent({ format: 'html' });
            if (text == "" && !self.isEmpty) {
              self.isEmpty = true;
            }
            else if (text != "" && self.isEmpty) {
              self.isEmpty = false;
            }
            if (!self.isEmpty) {
              //$(this.contentAreaContainer.parentElement).find("div.mce-toolbar-grp").hide();
             // $('.mce-container').addClass('lost-foucus');
            }
          });
          ed.on('mouseover ', function () {
            $(this.contentAreaContainer.parentElement).find("div.mce-toolbar-grp").show();
            $('.mce-container').removeClass('lost-foucus');
          })
          ed.on("init", function () {
            if (!self.isEmpty) {
              //$(this.contentAreaContainer.parentElement).find("div.mce-toolbar-grp").hide();
              //$('.mce-container').addClass('lost-foucus');
            } else {
              $(this.contentAreaContainer.parentElement).find("div.mce-toolbar-grp").show();
              $('.mce-container').removeClass('lost-foucus');
            }
          });
        }
        this.initImageUpload(ed);
      },
      init_instance_callback: (inst) => {
        inst.setContent(this.value ? this.value : '');
      }
    });
    if (tinymce.editors.length > 0) {
      tinymce.execCommand('mceFocus', true, this.tinymceID);
      tinymce.execCommand('mceRemoveEditor', true, this.tinymceID);
      tinymce.execCommand('mceAddEditor', true, this.tinymceID);
    }
  }

  initImageUpload(editor) {
    var inp = $('<input id="tinymce-uploader" type="file" name="pic" accept="image/*" style="display:none">');
    $(editor.getElement()).parent().append(inp);
    editor.addButton('imageupload', {
      icon: 'image',
      title: 'Insert Image',
      onclick: function (e) { // when toolbar button is clicked, open file select modal
        inp.trigger('click');
      }
    });
    inp.on("change", (e) => {
      this.addFilesToUpload(e);
    });
  }

  addFilesToUpload(event) {
    var target = event.target || event.srcElement;
    let files: File[] = target.files;
    this.onFileAdded(files[0]);
  }

  onFileAdded(file: any) {
    // var mediaFileUpload: MediaFileUpload = new MediaFileUpload(this.appService);
    // mediaFileUpload.getUploadUrl((url) => {
    //   mediaFileUpload.generateMetaData('file', null, (metaData) => {
    //     this.editor.insertContent('<span id="uploading_' + metaData.cStrFileID + '">Uploading 0%</span>');
    //     let id = 'uploading_' + metaData.cStrFileID;
    //     let uploadiWrp = tinymce.activeEditor.dom.get(id);
    //     mediaFileUpload.uploadFile(url, file, metaData, (event, obj: MediaUploadStatus) => {
    //       if (event.type === HttpEventType.UploadProgress) {
    //         $(uploadiWrp).html('Uploading' + obj.progress + '%');
    //       }
    //       else if (event instanceof HttpResponse) {
    //         if (event.body.cBSuccess) {
    //           let mediaFileDetails: MediaFileDetails = <MediaFileDetails>event.body.cObject;
    //           $(uploadiWrp).html('Uploading 100%');
    //           setTimeout(() => {
    //             $(uploadiWrp).remove();
    //             this.addMediaToeditor(mediaFileDetails);
    //           }, 200);
    //         }
    //       }
    //     })
    //   })
    // });
  }

  addMediaToeditor(mediaFileDetails) {
    // let url: string = this.appConfig.cloudGSFile + mediaFileDetails.cStrFileID;
    // this.editor.insertContent('<img class="content-img" src="' + url + '"/>');
    // this.wysiwygChange();
  }

  wysiwygChange() {
    let wysiwygRetunObj: WysiwygRetunObj = new WysiwygRetunObj;
    wysiwygRetunObj.html = this.editor.getContent({ format: 'html' });
    wysiwygRetunObj.text = this.editor.getContent({ format: 'text' });
    wysiwygRetunObj.id = this.tinyID;
    this.value = wysiwygRetunObj.html;
    this.onWysiwygChange.emit(wysiwygRetunObj);
  }
}

export class WysiwygConfig {
  menubar: boolean;
  statusbar: boolean;
  plugins: string[] = []
  toolbar: string = "";
  showOnfocus: boolean = true;
  constructor() {
    this.menubar = false;
    this.statusbar = false;
    this.plugins = ["autoresize", "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker", "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking", "save table contextmenu directionality emoticons template paste textcolor"];
    this.toolbar = "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link imageupload |  forecolor backcolor emoticons";
    this.showOnfocus = true;
  }
}

export class WysiwygRetunObj {
  text?: string;
  html?: string;
  id?:string;
}