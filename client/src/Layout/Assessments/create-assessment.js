/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
export default function CreateAssessment() {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Sidebar />
                    <div class="layout-page">
                        <Header />
                        <div class="content-wrapper">
                            <div className="page-wrapper">
                                <div className="page-content mt-4">
                                    {/**/}
                                    <div contentanimate>
                                        <router-outlet />
                                        <div className="row justify-content-center">
                                            <div className="col-md-11 stretch-card">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title">
                                                            <strong>Create Assessment</strong>
                                                        </div>
                                                        {/**/}
                                                        <div>
                                                            <form

                                                                noValidate
                                                                action
                                                                className="ng-untouched ng-pristine ng-invalid"
                                                            >
                                                                <div className="form-group">
                                                                    <label htmlFor>
                                                                        <strong>
                                                                            Category{' '}
                                                                            <span className="text-danger">
                                                                                *
                                                                            </span>
                                                                        </strong>
                                                                    </label>
                                                                    <select

                                                                        name="module"
                                                                        formcontrolname="exam_category_id"
                                                                        className="form-control ng-untouched ng-pristine ng-invalid"
                                                                    >
                                                                        <option value selected >
                                                                            -- Select Category --
                                                                        </option>
                                                                        <option value="l81bb594">
                                                                            Zoho
                                                                        </option>
                                                                        <option value="l8nfd6k1">
                                                                            Grand Test
                                                                        </option>
                                                                        {/**/}
                                                                    </select>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div

                                                                        className="col-md mb-2 mb-md-0 pr-1"
                                                                    >
                                                                        <label htmlFor>
                                                                            Assessment Name{' '}
                                                                            <strong

                                                                                className="text-danger"
                                                                            >
                                                                                *
                                                                            </strong>
                                                                        </label>
                                                                        <input

                                                                            type="text"
                                                                            formcontrolname="name"
                                                                            placeholder="Assessment Name"
                                                                            className="form-control ng-untouched ng-pristine ng-invalid"
                                                                        />
                                                                    </div>
                                                                    <div

                                                                        className="col-md mb-2 mb-md-0 pr-1"
                                                                    >
                                                                        <label htmlFor>
                                                                            No. of Times
                                                                        </label>
                                                                        <input

                                                                            type="number"
                                                                            formcontrolname="times"
                                                                            placeholder="Times"
                                                                            className="form-control ng-untouched ng-pristine ng-valid"
                                                                        />
                                                                    </div>
                                                                    <div

                                                                        className="col-md mb-2 mb-md-0 pr-1"
                                                                    >
                                                                        <label htmlFor>
                                                                            Assessment Password
                                                                        </label>
                                                                        <input

                                                                            type="text"
                                                                            formcontrolname="password"
                                                                            placeholder="Password"
                                                                            className="form-control ng-untouched ng-pristine ng-valid"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-sm pr-1">
                                                                        <label htmlFor>
                                                                            Exam Type{' '}
                                                                            <strong

                                                                                className="text-danger"
                                                                            >
                                                                                *
                                                                            </strong>
                                                                        </label>
                                                                        <select

                                                                            name="module"
                                                                            formcontrolname="exam_type"
                                                                            className="form-control ng-untouched ng-pristine ng-invalid"
                                                                        >
                                                                            <option

                                                                                value
                                                                                selected
                                                                                
                                                                            >
                                                                                -- Select Exam Type --
                                                                            </option>
                                                                            <option value="single">
                                                                                Single Timer
                                                                            </option>
                                                                            <option value="sectional">
                                                                                Sectional Wise Timer
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm pr-1">
                                                                        <label htmlFor>
                                                                            Cutoff Type{' '}
                                                                            <strong

                                                                                className="text-danger"
                                                                            >
                                                                                *
                                                                            </strong>
                                                                        </label>
                                                                        <select

                                                                            name="module"
                                                                            formcontrolname="cutoff_type"
                                                                            className="form-control ng-untouched ng-pristine ng-invalid"
                                                                        >
                                                                            <option

                                                                                value
                                                                                selected
                                                                                
                                                                            >
                                                                                -- Select Cutoff Type --
                                                                            </option>
                                                                            <option value="single">
                                                                                Single Cutoff
                                                                            </option>
                                                                            <option value="sectional">
                                                                                Sectional Cutoff
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm pr-1">
                                                                        <label htmlFor>
                                                                            Question Selection{' '}
                                                                            <strong

                                                                                className="text-danger"
                                                                            >
                                                                                *
                                                                            </strong>
                                                                        </label>
                                                                        <select

                                                                            name="module"
                                                                            formcontrolname="ques_selection"
                                                                            className="form-control ng-untouched ng-pristine ng-valid"
                                                                        >
                                                                            <option

                                                                                value="selected"
                                                                                selected
                                                                            >
                                                                                Selection
                                                                            </option>
                                                                            <option value="random">
                                                                                Random
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div className="form-group">
                                                                    <label htmlFor>
                                                                        Assessment Report Options
                                                                    </label>
                                                                    <div className="row">
                                                                        <div className="col-md-3 pr-1">
                                                                            <div

                                                                                className="form-check form-check-flat form-check-primary"
                                                                            >
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="checkbox"
                                                                                        formcontrolname="show_reports"
                                                                                        className="form-check-input ng-untouched ng-pristine ng-valid"
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Show Reports{' '}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 pr-1">
                                                                            <div

                                                                                className="form-check form-check-flat form-check-primary"
                                                                            >
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="checkbox"
                                                                                        formcontrolname="show_qualifying_percentage"
                                                                                        className="form-check-input ng-untouched ng-pristine"
                                                                                        
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Show Qualifying Percentage{' '}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 pr-1">
                                                                            <div

                                                                                className="form-check form-check-flat form-check-primary"
                                                                            >
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="checkbox"
                                                                                        formcontrolname="show_check_answers"
                                                                                        className="form-check-input ng-untouched ng-pristine"
                                                                                        
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Show Check Answers{' '}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 pr-1">
                                                                            <div

                                                                                className="form-check form-check-flat form-check-primary"
                                                                            >
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="checkbox"
                                                                                        formcontrolname="show_explanation"
                                                                                        className="form-check-input ng-untouched ng-pristine"
                                                                                        
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Show Explanation{' '}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 pr-1">
                                                                            <div

                                                                                className="form-check form-check-flat form-check-primary"
                                                                            >
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="checkbox"
                                                                                        formcontrolname="show_chapterwise"
                                                                                        className="form-check-input ng-untouched ng-pristine"
                                                                                        
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Show Chapter Wise Report{' '}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 pr-1">
                                                                            <div

                                                                                className="form-check form-check-flat form-check-primary"
                                                                            >
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="checkbox"
                                                                                        formcontrolname="show_accuracy_report"
                                                                                        className="form-check-input ng-untouched ng-pristine"
                                                                                        
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Show Accuracy Report{' '}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 pr-1">
                                                                            <div

                                                                                className="form-check form-check-flat form-check-primary"
                                                                            >
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="checkbox"
                                                                                        formcontrolname="show_leaderboard"
                                                                                        className="form-check-input ng-untouched ng-pristine"
                                                                                        
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Show Leaderboard{' '}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 pr-1">
                                                                            <div

                                                                                className="form-check form-check-flat form-check-primary"
                                                                            >
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="checkbox"
                                                                                        formcontrolname="show_private_testcases"
                                                                                        className="form-check-input ng-untouched ng-pristine"
                                                                                        
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Show Private Testcases Output{' '}
                                                                                </label>
                                                                                <br />
                                                                                <small>
                                                                                    <em>
                                                                                        Coding Questions Only
                                                                                    </em>
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div className="form-group">
                                                                    <label htmlFor>
                                                                        Assessment Flow{' '}
                                                                        <strong className="text-danger">
                                                                            *
                                                                        </strong>
                                                                    </label>
                                                                    <div className="row">
                                                                        <div

                                                                            className="col-md-3 col-12 pr-1"
                                                                        >
                                                                            <div className="form-check">
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="radio"
                                                                                        defaultValue={0}
                                                                                        formcontrolname="is_linear"
                                                                                        className="form-check-input ng-untouched ng-pristine ng-valid"
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Non-Linear{' '}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div

                                                                            className="col-md-3 col-12 pr-1"
                                                                        >
                                                                            <div className="form-check">
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="radio"
                                                                                        defaultValue={1}
                                                                                        formcontrolname="is_linear"
                                                                                        className="form-check-input ng-untouched ng-pristine ng-valid"
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Linear{' '}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div className="form-group">
                                                                    <label htmlFor>
                                                                        Assessment Adaptiveness{' '}
                                                                        <strong className="text-danger">
                                                                            *
                                                                        </strong>
                                                                    </label>
                                                                    <div className="row">
                                                                        <div

                                                                            className="col-md-3 col-12 pr-1"
                                                                        >
                                                                            <div className="form-check">
                                                                                <label

                                                                                    className="form-check-label"
                                                                                >
                                                                                    <input

                                                                                        type="radio"
                                                                                        defaultValue={0}
                                                                                        formcontrolname="adaptive"
                                                                                        className="form-check-input ng-untouched ng-pristine ng-valid"
                                                                                    />
                                                                                    <i

                                                                                        className="input-frame"
                                                                                    />{' '}
                                                                                    Non-Adaptive{' '}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/**/}
                                                                <div

                                                                    className="form-group d-flex justify-content-center mt-2"
                                                                >
                                                                    <button

                                                                        type="submit"
                                                                        className="btn btn-primary"
                                                                    >
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/**/}
                                    </div>
                                    {/**/}
                                </div>
                            </div>;
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
