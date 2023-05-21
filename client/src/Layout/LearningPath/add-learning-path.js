/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
export default function AddLearningPath() {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Sidebar />
                    <div class="layout-page">
                        <Header />
                        <div class="content-wrapper p-3">
                            <div className="page-content mt-4">
                                <router-outlet />
                                <form

                                    noValidate
                                    className="container ng-untouched ng-pristine ng-invalid"
                                >
                                    <div className="row mb-3">
                                        <div

                                            className="col-12 bg-white p-3 rounded box-shadow"
                                        >
                                            <div className="form-group">
                                                <label >
                                                    Learning Path
                                                    <sup className="text-danger">
                                                        *
                                                    </sup>
                                                </label>
                                                <input

                                                    type="text"
                                                    placeholder="Title"
                                                    formcontrolname="title"
                                                    pattern="^[A-Za-z0-9](?!.*?[^\nA-Za-z0-9]{2}).*?[A-Za-z0-9]$"
                                                    className="form-control w-100 pl-2 ng-untouched ng-pristine ng-invalid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div

                                            className="col-12 bg-white p-3 rounded box-shadow"
                                        >
                                            <div className="form-group">
                                                <label >
                                                    Tags
                                                    <sup className="text-danger">
                                                        *
                                                    </sup>
                                                </label>
                                                <select

                                                    formcontrolname="tags"
                                                    required
                                                    className="form-control w-100 pl-2 ng-untouched ng-pristine ng-invalid"
                                                >
                                                    <option selected value>
                                                        Select Relevant Tags
                                                    </option>
                                                    <option value="">
                                                        AWS
                                                    </option>
                                                    <option value="">
                                                        Database
                                                    </option>
                                                    <option value="">
                                                        DataScience
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div

                                            className="col-12 bg-white p-3 rounded box-shadow"
                                        >
                                            <div className="form-group">
                                                <label >
                                                    Cover Letter
                                                    <sup className="text-danger">
                                                        *
                                                    </sup>
                                                </label>
                                                <textarea

                                                    rows={4}
                                                    type="text"
                                                    formcontrolname="cover"
                                                    placeholder
                                                    className="form-control w-100 pl-2 ng-untouched ng-pristine ng-invalid"
                                                    defaultValue={'        '}
                                                />





                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div

                                            className="col-12 bg-white p-3 rounded box-shadow"
                                        >
                                            <div className="form-group">
                                                <label >
                                                    Difficulty
                                                    <sup className="text-danger">
                                                        *
                                                    </sup>
                                                </label>
                                                <select

                                                    formcontrolname="difficulty"
                                                    required
                                                    className="form-control w-100 pl-2 ng-untouched ng-pristine ng-invalid"
                                                >
                                                    <option selected value>
                                                        Select the Difficulty Level
                                                    </option>
                                                    <option value="beginner">
                                                        Beginner
                                                    </option>
                                                    <option value="intermediate">
                                                        Intermediate
                                                    </option>
                                                    <option value="advanced">
                                                        Advanced
                                                    </option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div

                                            className="col-12 bg-white p-3 rounded box-shadow"
                                        >
                                            <div className="form-group">
                                                <label >
                                                    Subscription
                                                    <sup className="text-danger">
                                                        *
                                                    </sup>
                                                </label>
                                                <select

                                                    formcontrolname="subscription"
                                                    required
                                                    className="form-control w-100 pl-2 ng-untouched ng-pristine ng-invalid"
                                                >
                                                    <option selected value>
                                                        Select Subscription
                                                    </option>
                                                    <option value="free">
                                                        Free
                                                    </option>
                                                    <option value="paid">
                                                        Paid
                                                    </option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    {/**/}
                                    {/**/}
                                    <div className="row mb-3">
                                        <div

                                            className="col-12 bg-white p-3 rounded box-shadow"
                                        >
                                            <div className="form-group">
                                                <label >
                                                    About this Learning Path
                                                    <sup className="text-danger">
                                                        *
                                                    </sup>
                                                </label>
                                                <editor

                                                    name="question"
                                                    formcontrolname="description"
                                                    _nghost-fwg-c92
                                                    className="ng-untouched ng-pristine ng-invalid"
                                                >

                                                    <textarea
                                                        id="tiny-angular_71647971051684681905530"
                                                        style={{ display: 'none' }}
                                                        aria-hidden="true"
                                                        defaultValue={''}
                                                    />
                                                    <div
                                                        role="application"
                                                        className="tox tox-tinymce"
                                                        aria-disabled="false"
                                                        style={{ visibility: 'hidden', height: 300 }}
                                                    >
                                                        <div className="tox-editor-container">
                                                            <div
                                                                data-alloy-vertical-dir="toptobottom"
                                                                className="tox-editor-header"
                                                            >
                                                                <div
                                                                    role="menubar"
                                                                    data-alloy-tabstop="true"
                                                                    className="tox-menubar"
                                                                >
                                                                    <button
                                                                        aria-haspopup="true"
                                                                        role="menuitem"
                                                                        type="button"
                                                                        tabIndex={-1}
                                                                        data-alloy-tabstop="true"
                                                                        unselectable="on"
                                                                        className="tox-mbtn tox-mbtn--select"
                                                                        aria-expanded="false"
                                                                        style={{ userSelect: 'none' }}
                                                                    >
                                                                        <span className="tox-mbtn__select-label">Edit</span>
                                                                        <div className="tox-mbtn__select-chevron">
                                                                            <svg width={10} height={10} focusable="false">
                                                                                <path
                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                                                                    fillRule="nonzero"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </button>
                                                                    <button
                                                                        aria-haspopup="true"
                                                                        role="menuitem"
                                                                        type="button"
                                                                        tabIndex={-1}
                                                                        data-alloy-tabstop="true"
                                                                        unselectable="on"
                                                                        className="tox-mbtn tox-mbtn--select"
                                                                        aria-expanded="false"
                                                                        style={{ userSelect: 'none' }}
                                                                    >
                                                                        <span className="tox-mbtn__select-label">View</span>
                                                                        <div className="tox-mbtn__select-chevron">
                                                                            <svg width={10} height={10} focusable="false">
                                                                                <path
                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                                                                    fillRule="nonzero"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </button>
                                                                    <button
                                                                        aria-haspopup="true"
                                                                        role="menuitem"
                                                                        type="button"
                                                                        tabIndex={-1}
                                                                        data-alloy-tabstop="true"
                                                                        unselectable="on"
                                                                        className="tox-mbtn tox-mbtn--select"
                                                                        aria-expanded="false"
                                                                        style={{ userSelect: 'none' }}
                                                                    >
                                                                        <span className="tox-mbtn__select-label">Insert</span>
                                                                        <div className="tox-mbtn__select-chevron">
                                                                            <svg width={10} height={10} focusable="false">
                                                                                <path
                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                                                                    fillRule="nonzero"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </button>
                                                                    <button
                                                                        aria-haspopup="true"
                                                                        role="menuitem"
                                                                        type="button"
                                                                        tabIndex={-1}
                                                                        data-alloy-tabstop="true"
                                                                        unselectable="on"
                                                                        className="tox-mbtn tox-mbtn--select"
                                                                        aria-expanded="false"
                                                                        style={{ userSelect: 'none' }}
                                                                    >
                                                                        <span className="tox-mbtn__select-label">Format</span>
                                                                        <div className="tox-mbtn__select-chevron">
                                                                            <svg width={10} height={10} focusable="false">
                                                                                <path
                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                                                                    fillRule="nonzero"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </button>
                                                                    <button
                                                                        aria-haspopup="true"
                                                                        role="menuitem"
                                                                        type="button"
                                                                        tabIndex={-1}
                                                                        data-alloy-tabstop="true"
                                                                        unselectable="on"
                                                                        className="tox-mbtn tox-mbtn--select"
                                                                        aria-expanded="false"
                                                                        style={{ userSelect: 'none' }}
                                                                    >
                                                                        <span className="tox-mbtn__select-label">Table</span>
                                                                        <div className="tox-mbtn__select-chevron">
                                                                            <svg width={10} height={10} focusable="false">
                                                                                <path
                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                                                                    fillRule="nonzero"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                                <div
                                                                    role="group"
                                                                    className="tox-toolbar-overlord"
                                                                    aria-disabled="false"
                                                                >
                                                                    <div role="group" className="tox-toolbar__primary">
                                                                        <div
                                                                            title
                                                                            role="toolbar"
                                                                            data-alloy-tabstop="true"
                                                                            tabIndex={-1}
                                                                            className="tox-toolbar__group"
                                                                        >
                                                                            <button
                                                                                aria-label="Undo"
                                                                                title="Undo"
                                                                                type="button"
                                                                                tabIndex={-1}
                                                                                className="tox-tbtn tox-tbtn--disabled"
                                                                                aria-disabled="true"
                                                                            >
                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                    <svg width={24} height={24} focusable="false">
                                                                                        <path
                                                                                            d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z"
                                                                                            fillRule="nonzero"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <button
                                                                                aria-label="Redo"
                                                                                title="Redo"
                                                                                type="button"
                                                                                tabIndex={-1}
                                                                                className="tox-tbtn tox-tbtn--disabled"
                                                                                aria-disabled="true"
                                                                            >
                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                    <svg width={24} height={24} focusable="false">
                                                                                        <path
                                                                                            d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z"
                                                                                            fillRule="nonzero"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        <div
                                                                            title
                                                                            role="toolbar"
                                                                            data-alloy-tabstop="true"
                                                                            tabIndex={-1}
                                                                            className="tox-toolbar__group"
                                                                        >
                                                                            <button
                                                                                title="Blocks"
                                                                                aria-label="Blocks"
                                                                                aria-haspopup="true"
                                                                                type="button"
                                                                                tabIndex={-1}
                                                                                unselectable="on"
                                                                                className="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
                                                                                aria-expanded="false"
                                                                                style={{ userSelect: 'none' }}
                                                                            >
                                                                                <span className="tox-tbtn__select-label">
                                                                                    Paragraph
                                                                                </span>
                                                                                <div className="tox-tbtn__select-chevron">
                                                                                    <svg width={10} height={10} focusable="false">
                                                                                        <path
                                                                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                                                                            fillRule="nonzero"
                                                                                        />
                                                                                    </svg>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                        <div
                                                                            title
                                                                            role="toolbar"
                                                                            data-alloy-tabstop="true"
                                                                            tabIndex={-1}
                                                                            className="tox-toolbar__group"
                                                                        >
                                                                            <button
                                                                                aria-label="Bold"
                                                                                title="Bold"
                                                                                type="button"
                                                                                tabIndex={-1}
                                                                                className="tox-tbtn"
                                                                                aria-disabled="false"
                                                                                aria-pressed="false"
                                                                            >
                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                    <svg width={24} height={24} focusable="false">
                                                                                        <path
                                                                                            d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z"
                                                                                            fillRule="evenodd"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <button
                                                                                aria-label="Italic"
                                                                                title="Italic"
                                                                                type="button"
                                                                                tabIndex={-1}
                                                                                className="tox-tbtn"
                                                                                aria-disabled="false"
                                                                                aria-pressed="false"
                                                                            >
                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                    <svg width={24} height={24} focusable="false">
                                                                                        <path
                                                                                            d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z"
                                                                                            fillRule="evenodd"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        <div
                                                                            title
                                                                            role="toolbar"
                                                                            data-alloy-tabstop="true"
                                                                            tabIndex={-1}
                                                                            className="tox-toolbar__group"
                                                                        >
                                                                            <button
                                                                                aria-label="Align left"
                                                                                title="Align left"
                                                                                type="button"
                                                                                tabIndex={-1}
                                                                                className="tox-tbtn"
                                                                                aria-disabled="false"
                                                                                aria-pressed="false"
                                                                            >
                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                    <svg width={24} height={24} focusable="false">
                                                                                        <path
                                                                                            d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                                                                            fillRule="evenodd"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <button
                                                                                aria-label="Align center"
                                                                                title="Align center"
                                                                                type="button"
                                                                                tabIndex={-1}
                                                                                className="tox-tbtn"
                                                                                aria-disabled="false"
                                                                                aria-pressed="false"
                                                                            >
                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                    <svg width={24} height={24} focusable="false">
                                                                                        <path
                                                                                            d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                                                                            fillRule="evenodd"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <button
                                                                                aria-label="Align right"
                                                                                title="Align right"
                                                                                type="button"
                                                                                tabIndex={-1}
                                                                                className="tox-tbtn"
                                                                                aria-disabled="false"
                                                                                aria-pressed="false"
                                                                            >
                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                    <svg width={24} height={24} focusable="false">
                                                                                        <path
                                                                                            d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                                                                            fillRule="evenodd"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <button
                                                                                aria-label="Justify"
                                                                                title="Justify"
                                                                                type="button"
                                                                                tabIndex={-1}
                                                                                className="tox-tbtn"
                                                                                aria-disabled="false"
                                                                                aria-pressed="false"
                                                                            >
                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                    <svg width={24} height={24} focusable="false">
                                                                                        <path
                                                                                            d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                                                                            fillRule="evenodd"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        <div
                                                                            role="toolbar"
                                                                            data-alloy-tabstop="true"
                                                                            tabIndex={-1}
                                                                            className="tox-toolbar__group"
                                                                        >
                                                                            <button
                                                                                aria-label="More..."
                                                                                title="More..."
                                                                                aria-haspopup="true"
                                                                                type="button"
                                                                                tabIndex={-1}
                                                                                data-alloy-tabstop="true"
                                                                                className="tox-tbtn"
                                                                                aria-expanded="false"
                                                                            >
                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                    <svg width={24} height={24} focusable="false">
                                                                                        <path
                                                                                            d="M6 10a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2zm12 0a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2zm-6 0a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2z"
                                                                                            fillRule="nonzero"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tox-anchorbar" />
                                                            </div>
                                                            <div className="tox-sidebar-wrap">
                                                                <div className="tox-edit-area">
                                                                    <iframe
                                                                        id="tiny-angular_71647971051684681905530_ifr"
                                                                        frameBorder={0}
                                                                        allowTransparency="true"
                                                                        title="Rich Text Area"
                                                                        className="tox-edit-area__iframe"
                                                                    />
                                                                </div>
                                                                <div role="complementary" className="tox-sidebar">
                                                                    <div
                                                                        data-alloy-tabstop="true"
                                                                        tabIndex={-1}
                                                                        className="tox-sidebar__slider tox-sidebar--sliding-closed"
                                                                        style={{ width: 0 }}
                                                                    >
                                                                        <div className="tox-sidebar__pane-container" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tox-statusbar">
                                                            <div className="tox-statusbar__text-container">
                                                                <div
                                                                    role="navigation"
                                                                    data-alloy-tabstop="true"
                                                                    className="tox-statusbar__path"
                                                                    aria-disabled="false"
                                                                >
                                                                    <div
                                                                        role="button"
                                                                        data-index={0}
                                                                        tab-index={-1}
                                                                        aria-level={1}
                                                                        tabIndex={-1}
                                                                        className="tox-statusbar__path-item"
                                                                        aria-disabled="false"
                                                                    >
                                                                        p
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    tabIndex={-1}
                                                                    data-alloy-tabstop="true"
                                                                    className="tox-statusbar__wordcount"
                                                                >
                                                                    0 words
                                                                </button>
                                                                <span className="tox-statusbar__branding">
                                                                    <a
                                                                        href="https://www.tiny.cloud/?utm_campaign=editor_referral&utm_medium=poweredby&utm_source=tinymce&utm_content=v5"
                                                                        rel="noopener"
                                                                        target="_blank"
                                                                        tabIndex={-1}
                                                                        aria-label="Powered by Tiny"
                                                                    >
                                                                        Powered by Tiny
                                                                    </a>
                                                                </span>
                                                            </div>
                                                            <div
                                                                title="Resize"
                                                                data-alloy-tabstop="true"
                                                                tabIndex={-1}
                                                                className="tox-statusbar__resize-handle"
                                                            >
                                                                <svg width={10} height={10} focusable="false">
                                                                    <g fillRule="nonzero">
                                                                        <path d="M8.1 1.1A.5.5 0 119 2l-7 7A.5.5 0 111 8l7-7zM8.1 5.1A.5.5 0 119 6l-3 3A.5.5 0 115 8l3-3z" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            className="tox-throbber"
                                                            style={{ display: 'none' }}
                                                        />
                                                    </div>
                                                </editor>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div
                                            className="col-12 bg-white p-3 rounded box-shadow"
                                        >
                                            <div className="form-group">
                                                <label >
                                                    Author
                                                    <sup className="text-danger">
                                                        *
                                                    </sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    formcontrolname="author"
                                                    placeholder="Author"
                                                    className="form-control w-100 pl-2 ng-untouched ng-pristine ng-invalid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="row mb-3 bg-white p-3 rounded box-shadow"
                                    >
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label>Hours</label><br />
                                                <select
                                                    formcontrolname="hour"
                                                    className="form-select ng-untouched ng-pristine ng-valid"
                                                >
                                                    <option value={0}>
                                                        0
                                                    </option>

                                                    <option value={1}>
                                                        1
                                                    </option>

                                                    <option value={2}>
                                                        2
                                                    </option>

                                                    <option value={3}>
                                                        3
                                                    </option>

                                                    <option value={4}>
                                                        4
                                                    </option>

                                                    <option value={5}>
                                                        5
                                                    </option>

                                                    <option value={6}>
                                                        6
                                                    </option>

                                                    <option value={7}>
                                                        7
                                                    </option>

                                                    <option value={8}>
                                                        8
                                                    </option>

                                                    <option value={9}>
                                                        9
                                                    </option>

                                                    <option value={10}>
                                                        10
                                                    </option>

                                                    <option value={11}>
                                                        11
                                                    </option>

                                                    <option value={12}>
                                                        12
                                                    </option>

                                                    <option value={13}>
                                                        13
                                                    </option>

                                                    <option value={14}>
                                                        14
                                                    </option>

                                                    <option value={15}>
                                                        15
                                                    </option>

                                                    <option value={16}>
                                                        16
                                                    </option>

                                                    <option value={17}>
                                                        17
                                                    </option>

                                                    <option value={18}>
                                                        18
                                                    </option>

                                                    <option value={19}>
                                                        19
                                                    </option>

                                                    <option value={20}>
                                                        20
                                                    </option>

                                                    <option value={21}>
                                                        21
                                                    </option>

                                                    <option value={22}>
                                                        22
                                                    </option>

                                                    <option value={23}>
                                                        23
                                                    </option>


                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label >Minutes</label>
                                                <select

                                                    formcontrolname="minute"
                                                    className="form-select ng-untouched ng-pristine ng-valid"
                                                >
                                                    <option value={0}>
                                                        0
                                                    </option>

                                                    <option value={1}>
                                                        1
                                                    </option>

                                                    <option value={2}>
                                                        2
                                                    </option>

                                                    <option value={3}>
                                                        3
                                                    </option>

                                                    <option value={4}>
                                                        4
                                                    </option>

                                                    <option value={5}>
                                                        5
                                                    </option>

                                                    <option value={6}>
                                                        6
                                                    </option>

                                                    <option value={7}>
                                                        7
                                                    </option>

                                                    <option value={8}>
                                                        8
                                                    </option>

                                                    <option value={9}>
                                                        9
                                                    </option>

                                                    <option value={10}>
                                                        10
                                                    </option>

                                                    <option value={11}>
                                                        11
                                                    </option>

                                                    <option value={12}>
                                                        12
                                                    </option>

                                                    <option value={13}>
                                                        13
                                                    </option>

                                                    <option value={14}>
                                                        14
                                                    </option>

                                                    <option value={15}>
                                                        15
                                                    </option>

                                                    <option value={16}>
                                                        16
                                                    </option>

                                                    <option value={17}>
                                                        17
                                                    </option>

                                                    <option value={18}>
                                                        18
                                                    </option>

                                                    <option value={19}>
                                                        19
                                                    </option>

                                                    <option value={20}>
                                                        20
                                                    </option>

                                                    <option value={21}>
                                                        21
                                                    </option>

                                                    <option value={22}>
                                                        22
                                                    </option>

                                                    <option value={23}>
                                                        23
                                                    </option>

                                                    <option value={24}>
                                                        24
                                                    </option>

                                                    <option value={25}>
                                                        25
                                                    </option>

                                                    <option value={26}>
                                                        26
                                                    </option>

                                                    <option value={27}>
                                                        27
                                                    </option>

                                                    <option value={28}>
                                                        28
                                                    </option>

                                                    <option value={29}>
                                                        29
                                                    </option>

                                                    <option value={30}>
                                                        30
                                                    </option>

                                                    <option value={31}>
                                                        31
                                                    </option>

                                                    <option value={32}>
                                                        32
                                                    </option>

                                                    <option value={33}>
                                                        33
                                                    </option>

                                                    <option value={34}>
                                                        34
                                                    </option>

                                                    <option value={35}>
                                                        35
                                                    </option>

                                                    <option value={36}>
                                                        36
                                                    </option>

                                                    <option value={37}>
                                                        37
                                                    </option>

                                                    <option value={38}>
                                                        38
                                                    </option>

                                                    <option value={39}>
                                                        39
                                                    </option>

                                                    <option value={40}>
                                                        40
                                                    </option>

                                                    <option value={41}>
                                                        41
                                                    </option>

                                                    <option value={42}>
                                                        42
                                                    </option>

                                                    <option value={43}>
                                                        43
                                                    </option>

                                                    <option value={44}>
                                                        44
                                                    </option>

                                                    <option value={45}>
                                                        45
                                                    </option>

                                                    <option value={46}>
                                                        46
                                                    </option>

                                                    <option value={47}>
                                                        47
                                                    </option>

                                                    <option value={48}>
                                                        48
                                                    </option>

                                                    <option value={49}>
                                                        49
                                                    </option>

                                                    <option value={50}>
                                                        50
                                                    </option>

                                                    <option value={51}>
                                                        51
                                                    </option>

                                                    <option value={52}>
                                                        52
                                                    </option>

                                                    <option value={53}>
                                                        53
                                                    </option>

                                                    <option value={54}>
                                                        54
                                                    </option>

                                                    <option value={55}>
                                                        55
                                                    </option>

                                                    <option value={56}>
                                                        56
                                                    </option>

                                                    <option value={57}>
                                                        57
                                                    </option>

                                                    <option value={58}>
                                                        58
                                                    </option>

                                                    <option value={59}>
                                                        59
                                                    </option>


                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label >
                                                    Learning Image
                                                    <sup className="text-danger">
                                                        *
                                                    </sup>
                                                </label>
                                                <div>
                                                    <input class="form-control" type="file" id="formFileMultiple" multiple></input>
                                                </div>
                                            </div>
                                            {/**/}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div

                                            className="col-12 bg-white p-3 rounded box-shadow"
                                        >
                                            <div className="form-group">
                                                <label

                                                    className="d-flex justify-content-between"
                                                >
                                                    <span >
                                                        What you'll learn
                                                        <sup className="text-danger">
                                                            *
                                                        </sup>
                                                    </span>
                                                    <button

                                                        type="button"
                                                        className="btn btn-dark btn-sm"
                                                    >
                                                        +
                                                        Add{' '}
                                                    </button>
                                                </label>

                                                <hr />
                                                <div

                                                    formarrayname="learn"
                                                    className="ng-untouched ng-pristine ng-invalid"
                                                >
                                                    <div

                                                        className="d-flex ng-untouched ng-pristine ng-invalid"
                                                    >
                                                        <input

                                                            type="text"
                                                            placeholder="what you will learn"
                                                            formcontrolname="learnData"
                                                            className="form-control w-100 px-2 mt-2 ng-untouched ng-pristine ng-invalid"
                                                            id="learnData0"
                                                        />

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div

                                            className="col-12 bg-white p-3 rounded box-shadow"
                                        >
                                            <div className="form-group">
                                                <label

                                                    className="d-flex justify-content-between"
                                                >
                                                    <span >
                                                        Requirements
                                                        <sup className="text-danger">
                                                            *
                                                        </sup>
                                                    </span>
                                                    <button

                                                        type="button"
                                                        className="btn btn-dark btn-sm"
                                                    >
                                                        +
                                                        Add
                                                    </button>
                                                </label>

                                                <hr />
                                                <div

                                                    formarrayname="requirements"
                                                    className="ng-untouched ng-pristine ng-invalid"
                                                >
                                                    <div

                                                        className="d-flex ng-untouched ng-pristine ng-invalid"
                                                    >
                                                        <input

                                                            type="text"
                                                            placeholder="Requirements"
                                                            formcontrolname="requirementsData"
                                                            className="form-control w-100 px-2 mt-2 ng-untouched ng-pristine ng-invalid"
                                                            id="requirementsData0"
                                                        />

                                                    </div>




                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary">
                                            Create
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}