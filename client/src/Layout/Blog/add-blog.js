/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
export default function Addblog() {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Sidebar />
                    <div class="layout-page">
                        <Header />
                        <div class="content-wrapper p-3">
                            <div className="page-content mt-10">
                                <router-outlet />
                                <div className="row justify-content-center">
    <div className="col-md-11 stretch-card">
        <div className="card my-3">
            <div className="card-body">
                <div className="card-title text-center"><strong>Create Blog</strong></div>
                <form noValidate action className="ng-untouched ng-pristine ng-invalid">
                    <div className="form-group"><label htmlFor><strong>Title <span className="text-danger">*</span></strong></label><input type="text" placeholder="Title" formcontrolname="title" className="form-control ng-untouched ng-pristine ng-invalid" /></div>
                    <div className="form-group row">
                        <div className="col-md mb-2 mb-md-0 pr-1"><label>Tags <span className="text-danger">*</span></label>
                            <ng-select formcontrolname="tags" placeholder="Select Relevant Tags" className="ng-select ng-select-multiple ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-invalid">
                                <div className="ng-select-container">
                                    <div className="ng-value-container">
                                        <div className="ng-placeholder">Select Relevant Tags</div><div role="combobox" aria-haspopup="listbox" className="ng-input" aria-expanded="false"><input aria-autocomplete="list" type="text" autoCorrect="off" autoCapitalize="off" autoComplete="a751535fc8b0" /></div>
                                    </div><span className="ng-arrow-wrapper"><span className="ng-arrow" /></span>
                                </div>
                            </ng-select>
                        </div>
                        <div className="col-md mb-2 mb-md-0 pr-1"><label htmlFor><strong>Created By: <span className="text-danger">*</span></strong></label><input type="text" placeholder="Author" formcontrolname="author" className="form-control ng-untouched ng-pristine ng-invalid" /></div>
                    </div>
                    <div className="form-group"><label htmlFor><strong>Description <span className="text-danger">*</span></strong></label>
                        <editor name="description" formcontrolname="description" _nghost-tpk-c92 className="ng-untouched ng-pristine ng-invalid"><textarea id="tiny-angular_78428566031684781217683" style={{display: 'none'}} aria-hidden="true" defaultValue={""} />
                            <div role="application" className="tox tox-tinymce" aria-disabled="false" style={{visibility: 'hidden', height: '300px'}}>
                                <div className="tox-editor-container">
                                    <div data-alloy-vertical-dir="toptobottom" className="tox-editor-header">
                                        <div role="menubar" data-alloy-tabstop="true" className="tox-menubar"><button aria-haspopup="true" role="menuitem" type="button" tabIndex={-1} data-alloy-tabstop="true" unselectable="on" className="tox-mbtn tox-mbtn--select" aria-expanded="false" style={{userSelect: 'none'}}><span className="tox-mbtn__select-label">Edit</span>
                                                <div className="tox-mbtn__select-chevron"><svg width={10} height={10} focusable="false">
                                                        <path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fillRule="nonzero" />
                                                    </svg></div>
                                            </button><button aria-haspopup="true" role="menuitem" type="button" tabIndex={-1} data-alloy-tabstop="true" unselectable="on" className="tox-mbtn tox-mbtn--select" aria-expanded="false" style={{userSelect: 'none'}}><span className="tox-mbtn__select-label">View</span>
                                                <div className="tox-mbtn__select-chevron"><svg width={10} height={10} focusable="false">
                                                        <path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fillRule="nonzero" />
                                                    </svg></div>
                                            </button><button aria-haspopup="true" role="menuitem" type="button" tabIndex={-1} data-alloy-tabstop="true" unselectable="on" className="tox-mbtn tox-mbtn--select" aria-expanded="false" style={{userSelect: 'none'}}><span className="tox-mbtn__select-label">Insert</span>
                                                <div className="tox-mbtn__select-chevron"><svg width={10} height={10} focusable="false">
                                                        <path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fillRule="nonzero" />
                                                    </svg></div>
                                            </button><button aria-haspopup="true" role="menuitem" type="button" tabIndex={-1} data-alloy-tabstop="true" unselectable="on" className="tox-mbtn tox-mbtn--select" aria-expanded="false" style={{userSelect: 'none'}}><span className="tox-mbtn__select-label">Format</span>
                                                <div className="tox-mbtn__select-chevron"><svg width={10} height={10} focusable="false">
                                                        <path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fillRule="nonzero" />
                                                    </svg></div>
                                            </button><button aria-haspopup="true" role="menuitem" type="button" tabIndex={-1} data-alloy-tabstop="true" unselectable="on" className="tox-mbtn tox-mbtn--select" aria-expanded="false" style={{userSelect: 'none'}}><span className="tox-mbtn__select-label">Table</span>
                                                <div className="tox-mbtn__select-chevron"><svg width={10} height={10} focusable="false">
                                                        <path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fillRule="nonzero" />
                                                    </svg></div>
                                            </button></div>
                                        <div role="group" className="tox-toolbar-overlord" aria-disabled="false">
                                            <div role="group" className="tox-toolbar__primary">
                                                <div title role="toolbar" data-alloy-tabstop="true" tabIndex={-1} className="tox-toolbar__group"><button aria-label="Undo" title="Undo" type="button" tabIndex={-1} className="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z" fillRule="nonzero" />
                                                            </svg></span></button><button aria-label="Redo" title="Redo" type="button" tabIndex={-1} className="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z" fillRule="nonzero" />
                                                            </svg></span></button></div>
                                                <div title role="toolbar" data-alloy-tabstop="true" tabIndex={-1} className="tox-toolbar__group"><button title="Blocks" aria-label="Blocks" aria-haspopup="true" type="button" tabIndex={-1} unselectable="on" className="tox-tbtn tox-tbtn--select tox-tbtn--bespoke" aria-expanded="false" style={{userSelect: 'none'}}><span className="tox-tbtn__select-label">Paragraph</span>
                                                        <div className="tox-tbtn__select-chevron"><svg width={10} height={10} focusable="false">
                                                                <path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fillRule="nonzero" />
                                                            </svg></div>
                                                    </button></div>
                                                <div title role="toolbar" data-alloy-tabstop="true" tabIndex={-1} className="tox-toolbar__group"><button aria-label="Bold" title="Bold" type="button" tabIndex={-1} className="tox-tbtn" aria-disabled="false" aria-pressed="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z" fillRule="evenodd" />
                                                            </svg></span></button><button aria-label="Italic" title="Italic" type="button" tabIndex={-1} className="tox-tbtn" aria-disabled="false" aria-pressed="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z" fillRule="evenodd" />
                                                            </svg></span></button></div>
                                                <div title role="toolbar" data-alloy-tabstop="true" tabIndex={-1} className="tox-toolbar__group"><button aria-label="Align left" title="Align left" type="button" tabIndex={-1} className="tox-tbtn" aria-disabled="false" aria-pressed="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fillRule="evenodd" />
                                                            </svg></span></button><button aria-label="Align center" title="Align center" type="button" tabIndex={-1} className="tox-tbtn" aria-disabled="false" aria-pressed="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fillRule="evenodd" />
                                                            </svg></span></button><button aria-label="Align right" title="Align right" type="button" tabIndex={-1} className="tox-tbtn" aria-disabled="false" aria-pressed="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fillRule="evenodd" />
                                                            </svg></span></button><button aria-label="Justify" title="Justify" type="button" tabIndex={-1} className="tox-tbtn" aria-disabled="false" aria-pressed="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fillRule="evenodd" />
                                                            </svg></span></button></div>
                                                <div title role="toolbar" data-alloy-tabstop="true" tabIndex={-1} className="tox-toolbar__group">
                                                    <div aria-pressed="false" aria-label="Bullet list" title="Bullet list" role="button" aria-haspopup="true" tabIndex={-1} unselectable="on" className="tox-split-button" aria-disabled="false" aria-expanded="false" aria-describedby="aria_1939248432771684781219187" style={{userSelect: 'none'}}><span role="presentation" className="tox-tbtn" aria-disabled="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                    <path d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z" fillRule="evenodd" />
                                                                </svg></span></span><span role="presentation" className="tox-tbtn tox-split-button__chevron" aria-disabled="false"><svg width={10} height={10} focusable="false">
                                                                <path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fillRule="nonzero" />
                                                            </svg></span><span aria-hidden="true" id="aria_1939248432771684781219187" style={{display: 'none'}}>To open the popup, press Shift+Enter</span></div>
                                                    <div aria-pressed="false" aria-label="Numbered list" title="Numbered list" role="button" aria-haspopup="true" tabIndex={-1} unselectable="on" className="tox-split-button" aria-disabled="false" aria-expanded="false" aria-describedby="aria_2846760652791684781219189" style={{userSelect: 'none'}}><span role="presentation" className="tox-tbtn" aria-disabled="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                    <path d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z" fillRule="evenodd" />
                                                                </svg></span></span><span role="presentation" className="tox-tbtn tox-split-button__chevron" aria-disabled="false"><svg width={10} height={10} focusable="false">
                                                                <path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fillRule="nonzero" />
                                                            </svg></span><span aria-hidden="true" id="aria_2846760652791684781219189" style={{display: 'none'}}>To open the popup, press Shift+Enter</span></div><button aria-label="Decrease indent" title="Decrease indent" type="button" tabIndex={-1} className="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm1.6-3.8a1 1 0 01-1.2 1.6l-3-2a1 1 0 010-1.6l3-2a1 1 0 011.2 1.6L6.8 12l1.8 1.2z" fillRule="evenodd" />
                                                            </svg></span></button><button aria-label="Increase indent" title="Increase indent" type="button" tabIndex={-1} className="tox-tbtn" aria-disabled="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 011.2-1.6l3 2a1 1 0 010 1.6l-3 2a1 1 0 11-1.2-1.6z" fillRule="evenodd" />
                                                            </svg></span></button>
                                                </div>
                                                <div title role="toolbar" data-alloy-tabstop="true" tabIndex={-1} className="tox-toolbar__group"><button aria-label="Insert/edit code sample" title="Insert/edit code sample" type="button" tabIndex={-1} className="tox-tbtn" aria-disabled="false" aria-pressed="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={26} focusable="false">
                                                                <path d="M7.1 11a2.8 2.8 0 01-.8 2 2.8 2.8 0 01.8 2v1.7c0 .3.1.6.4.8.2.3.5.4.8.4.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.7 0-1.4-.3-2-.8-.5-.6-.8-1.3-.8-2V15c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 01-.4-.4v-.8c0-.2.2-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V9.3c0-.7.3-1.4.8-2 .6-.5 1.3-.8 2-.8.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8V11zm9.8 0V9.3c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 01-.4-.4V7c0-.2.1-.4.4-.4.7 0 1.4.3 2 .8.5.6.8 1.3.8 2V11c0 .3.1.6.4.8.2.3.5.4.8.4.2 0 .4.2.4.4v.8c0 .2-.2.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8v1.7c0 .7-.3 1.4-.8 2-.6.5-1.3.8-2 .8a.4.4 0 01-.4-.4v-.8c0-.2.1-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V15a2.8 2.8 0 01.8-2 2.8 2.8 0 01-.8-2zm-3.3-.4c0 .4-.1.8-.5 1.1-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.4-.3-.5-.7-.5-1.1 0-.5.1-.9.5-1.2.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4.4.3.5.7.5 1.2zM12 13c.4 0 .8.1 1.1.5.4.3.5.7.5 1.1 0 1-.1 1.6-.5 2a3 3 0 01-1.1 1c-.4.3-.8.4-1.1.4a.5.5 0 01-.5-.5V17a3 3 0 001-.2l.6-.6c-.6 0-1-.2-1.3-.5-.2-.3-.3-.7-.3-1 0-.5.1-1 .5-1.2.3-.4.7-.5 1.1-.5z" fillRule="evenodd" />
                                                            </svg></span></button></div>
                                                <div title role="toolbar" data-alloy-tabstop="true" tabIndex={-1} className="tox-toolbar__group"><button aria-label="Insert/edit image" title="Insert/edit image" type="button" tabIndex={-1} className="tox-tbtn" aria-disabled="false" aria-pressed="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={24} height={24} focusable="false">
                                                                <path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 100-4 2 2 0 000 4z" fillRule="nonzero" />
                                                            </svg></span></button></div>
                                                <div title role="toolbar" data-alloy-tabstop="true" tabIndex={-1} className="tox-toolbar__group"><button aria-label="Insert a math equation - MathType" title="Insert a math equation - MathType" type="button" tabIndex={-1} className="tox-tbtn" aria-disabled="false"><span className="tox-icon tox-tbtn__icon-wrap"><svg width={16} height={16} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 261.7" style={{enableBackground: 'new 0 0 300 261.7'}} xmlSpace="preserve" focusable="false">
                                                                <g id="icon-wirisformula" stroke="none" strokeWidth={1} fillRule="evenodd">
                                                                    <g>
                                                                        <path className="st1" d="M90.2,257.7c-11.4,0-21.9-6.4-27-16.7l-60-119.9c-7.5-14.9-1.4-33.1,13.5-40.5c14.9-7.5,33.1-1.4,40.5,13.5l27.3,54.7L121.1,39c5.3-15.8,22.4-24.4,38.2-19.1c15.8,5.3,24.4,22.4,19.1,38.2l-59.6,179c-3.9,11.6-14.3,19.7-26.5,20.6C91.6,257.7,90.9,257.7,90.2,257.7" />
                                                                    </g>
                                                                </g>
                                                                <g>
                                                                    <g>
                                                                        <path className="st2" d="M300,32.8c0-16.4-13.4-29.7-29.9-29.7c-2.9,0-7.2,0.8-7.2,0.8c-37.9,9.1-71.3,14-112,14c-0.3,0-0.6,0-1,0c-16.5,0-29.9,13.3-29.9,29.7c0,16.4,13.4,29.7,29.9,29.7l0,0c45.3,0,83.1-5.3,125.3-15.3h0C289.3,59.5,300,47.4,300,32.8" />
                                                                    </g>
                                                                </g>
                                                            </svg></span></button></div>
                                            </div>
                                        </div>
                                        <div className="tox-anchorbar" />
                                    </div>
                                    <div className="tox-sidebar-wrap">
                                        <div className="tox-edit-area"><iframe id="tiny-angular_78428566031684781217683_ifr" frameBorder={0} allowTransparency="true" title="Rich Text Area" className="tox-edit-area__iframe" /></div>
                                        <div role="complementary" className="tox-sidebar">
                                            <div data-alloy-tabstop="true" tabIndex={-1} className="tox-sidebar__slider tox-sidebar--sliding-closed" style={{width: '0px'}}>
                                                <div className="tox-sidebar__pane-container" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tox-statusbar">
                                    <div className="tox-statusbar__text-container">
                                        <div role="navigation" data-alloy-tabstop="true" className="tox-statusbar__path" aria-disabled="false">
                                            <div role="button" data-index={0} tab-index={-1} aria-level={1} tabIndex={-1} className="tox-statusbar__path-item" aria-disabled="false">p</div>
                                        </div><button type="button" tabIndex={-1} data-alloy-tabstop="true" className="tox-statusbar__wordcount">0 words</button><span className="tox-statusbar__branding"><a href="https://www.tiny.cloud/?utm_campaign=editor_referral&utm_medium=poweredby&utm_source=tinymce&utm_content=v5" rel="noopener" target="_blank" tabIndex={-1} aria-label="Powered by Tiny">Powered by Tiny</a></span>
                                    </div>
                                    <div title="Resize" data-alloy-tabstop="true" tabIndex={-1} className="tox-statusbar__resize-handle"><svg width={10} height={10} focusable="false">
                                            <g fillRule="nonzero">
                                                <path d="M8.1 1.1A.5.5 0 119 2l-7 7A.5.5 0 111 8l7-7zM8.1 5.1A.5.5 0 119 6l-3 3A.5.5 0 115 8l3-3z" />
                                            </g>
                                        </svg></div>
                                </div>
                                <div aria-hidden="true" className="tox-throbber" style={{display: 'none'}} />
                            </div>
                        </editor>
                    </div>
                    <div className="form-group-row">
                        <div className="col-md mb-2 mb-md-0 pr-1"><button type="button" className="btn btn-primary">Insert Image</button></div>
                    </div>
                    <div className="form-group d-flex justify-content-center mt-2"><button type="submit" className="btn btn-primary">Create</button></div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
        </>
    );
}