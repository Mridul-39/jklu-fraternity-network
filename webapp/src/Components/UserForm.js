import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {FormControl, Button} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './UserForm.css';
import Paper from "@material-ui/core/Paper";
import FormValidation from '../util/FormValidation';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

class UserForm extends React.Component {
    initialState = {
        gitId: '',
        name: '',
        city: '',
        clg: 'JK Lakshmipat University',
        git1: '',
        git2: '',
        git3: '',
        git4: '',
        gitIdError: false,
        cityError: false,
        clgError: false,
        userNameError: false,
        nameError: false,
        git1Error: false,
        git2Error: false,
        git3Error: false,
        git4Error: false,
        gitIdErrorMsg: '',
        cityErrorMsg: '',
        clgErrorMsg: '',
        userNameErrorMsg: '',
        nameErrorMsg: '',
        git1ErrorMsg: '',
        git2ErrorMsg: '',
        git3ErrorMsg: '',
        git4ErrorMsg: '',
        snackbarOpen: false,
        severity: '',
        msg: ''

    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
        console.log(this.initialState);
    }

    checkName(string) {
        if (string.length >= 3) {
            if (RegExp('^([a-zA-Z\\s\\.\\)\\(]+)$').test(string)) {
                return {msg: undefined, error: false};
            } else {
                return {msg: 'Special Char and numbers are not permitted.', error: true};
            }
        } else {
            return {msg: 'Enter string longer than 3 characters.', error: true};
        }
    }

    checkCityClg(string) {
        if (string.trim().length === 0) {
            return {msg: undefined, error: false};
        }
        if (string.trim().length >= 3) {
            if (RegExp('^([a-zA-Z\\s\\.\\)\\(]+)$').test(string)) {
                return {msg: undefined, error: false};
            } else {
                return {msg: 'Special Char and numbers are not permitted.', error: true};
            }
        }
        if (0 < string.trim().length && string.trim().length < 3) {
            return {msg: 'Enter string longer than 3 characters.', error: true};
        }
    }

    checkCompulsoryGithubId(string) {
        if (string.length >= 3) {
            if (RegExp('(^[a-zA-Z0-9][a-zA-Z0-9\\-]+[a-zA-Z0-9])$').test(string)) {
                return {msg: undefined, error: false};
            } else {
                return {msg: 'Github username has alphanumeric char and hyphen.', error: true};
            }
        } else {
            return {msg: 'Github username is longer than 3 characters.', error: true};
        }
    }

    checkOtherGithubId(string) {
        if (string.trim().length === 0) {
            return {msg: undefined, error: false};
        }
        if (string.trim().length >= 3) {
            if (RegExp('(^[a-zA-Z0-9][a-zA-Z0-9\\-]+[a-zA-Z0-9])$').test(string)) {
                return {msg: undefined, error: false};
            } else {
                return {msg: 'Github username has alphanumeric char and hyphen.', error: true};
            }
        }
        if (0 < string.trim().length && string.trim().length < 4) {
            return {msg: 'Github username is longer than 3 characters.', error: true};
        }
    }

    handleGitIdChange = event => {
        this.setState({gitId: event.target.value}, () => {
            this.validateGitId();
        });
    };
    validateGitId = () => {
        const {gitId} = this.state;
        let {msg, error} = this.checkCompulsoryGithubId(gitId);
        this.setState({
            gitIdErrorMsg: msg,
            gitIdError: error
        });
    };
    handleNameChange = event => {
        this.setState({name: event.target.value}, () => {
            this.validateName();
        });
    };
    validateName = () => {
        const {name} = this.state;
        let {msg, error} = this.checkName(name);
        console.log('name', msg, error);
        this.setState({
            nameErrorMsg: msg,
            nameError: error
        });
    };

    handleCityChange = event => {
        this.setState({city: event.target.value}, () => {
            this.validateCity();
        });
    };
    validateCity = () => {
        const {city} = this.state;
        let {msg, error} = this.checkCityClg(city);
        console.log('city', msg, error);
        this.setState({
            cityErrorMsg: msg,
            cityError: error
        });
    };
    handleClgChange = event => {
        this.setState({clg: event.target.value}, () => {
            this.validateClg();
        });
    };
    validateClg = () => {
        const {clg} = this.state;
        let {msg, error} = this.checkCityClg(clg);
        this.setState({
            clgErrorMsg: msg,
            clgError: error
        });
    };
    handleGit1Error = event => {
        this.setState({git1: event.target.value}, () => {
            this.validateGit1();
        });
    };
    validateGit1 = () => {
        const {git1} = this.state;
        let {msg, error} = this.checkCompulsoryGithubId(git1);
        this.setState({
            git1ErrorMsg: msg,
            git1Error: error
        });
    };
    handleGit2Error = event => {
        this.setState({git2: event.target.value}, () => {
            this.validateGit2();
        });
    };
    validateGit2 = () => {
        const {git2} = this.state;
        let {msg, error} = this.checkCompulsoryGithubId(git2);
        this.setState({
            git2ErrorMsg: msg,
            git2Error: error
        });
    };
    handleGit3Error = event => {
        this.setState({git3: event.target.value}, () => {
            this.validateGit3();
        });
    };
    validateGit3 = () => {
        const {git3} = this.state;
        let {msg, error} = this.checkOtherGithubId(git3);
        this.setState({
            git3ErrorMsg: msg,
            git3Error: error
        });
    };
    handleGit4Error = event => {
        this.setState({git4: event.target.value}, () => {
            this.validateGit4();
        });
    };
    validateGit4 = () => {
        const {git4} = this.state;
        let {msg, error} = this.checkOtherGithubId(git4);
        this.setState({
            git4ErrorMsg: msg,
            git4Error: error
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        // this.setState(
        //     {
        //         snackbarOpen: true,
        //         severity: "success",
        //         msg: 'Data Saved Successfully'
        //     }
        // );
        const {name, gitId, clg, city, git1, git2, git3, git4} = this.state;
        if (!this.state.nameError && !this.state.gitIdError && !this.state.git1Error && !this.state.git2Error) {
            //todo: loader on screen
            FormValidation(gitId.trim().toLowerCase(), clg.trim(), git1.trim().toLowerCase(),
                git2.trim().toLowerCase(), git3.trim().toLowerCase(), git4.trim().toLowerCase(), city.trim(),
                name.trim())
                .then(res => {
                    //todo loader stop
                    //    todo: success snackbar
                    console.log(res);
                }).catch(err => {
                //    todo: loader stop
                //todo: failure snackbar
                console.log('error');
                console.log(err);
            });
        }
    };
    clearAll = event => {
        event.preventDefault();
        this.setState(this.initialState);
    };

    render() {
        return (
            <div>
                <div className="starter">
                    <div>
                        <form className="text">
                            <p>Registration</p>
                        </form>
                    </div>
                    <div className="">
                        <div className="form-style">
                            <div className="designform">
                                <form className={'tf-comp'}>
                                    <TextField required id="outlined-gitId" autoFocus={true} label="GitHub Username"
                                               value={this.state.gitId}
                                               error={this.state.gitIdError} onChange={this.handleGitIdChange}
                                               name="git"
                                               type="text"
                                               helperText={this.state.gitIdErrorMsg}
                                               variant="outlined"/>
                                </form>
                                <form className={'tf-comp'}>
                                    <TextField required id="outlined-name" label="Name" value={this.state.name}
                                               onChange={this.handleNameChange}
                                               error={this.state.nameError} name="name" type="text" variant="outlined"
                                               helperText={this.state.nameErrorMsg}/>
                                </form>
                                <form className={'tf-comp'}>
                                    <TextField id="outlined-city" label="City" value={this.state.city}
                                               onChange={this.handleCityChange}
                                               name="city"
                                               error={this.state.cityError} helperText={this.state.cityErrorMsg}
                                               type="text"
                                               variant="outlined"/>
                                </form>
                                <form className={'tf-comp'}>
                                    <TextField
                                        id="outlined-clg"
                                        name="college"
                                        variant="outlined"
                                        label="University/College"
                                        value={this.state.clg}
                                        error={this.state.clgError}
                                        onChange={this.handleClgChange}
                                        helperText={this.state.clgErrorMsg}
                                    >
                                    </TextField>
                                </form>
                            </div>
                        </div>

                        <div className="designform">
                            <form className="subtext">
                                <p>Add Friends</p>
                            </form>
                            <form>
                                <TextField required id="outlined-git1" label="GitHub Username" value={this.state.git1}
                                           error={this.state.git1Error} onChange={this.handleGit1Error} name="git1"
                                           type="text"
                                           helperText={this.state.git1ErrorMsg}
                                           variant="outlined"/>
                            </form>
                            <form>
                                <TextField required id="outlined-git2" label="GitHub Username" value={this.state.git2}
                                           error={this.state.git2Error} onChange={this.handleGit2Error} name="git2"
                                           type="text"
                                           helperText={this.state.git2ErrorMsg}
                                           variant="outlined"/>
                            </form>
                            <form>
                                <TextField id="outlined-git3" label="GitHub Username" value={this.state.git3}
                                           onChange={this.handleGit3Error}
                                           helperText={this.state.git3ErrorMsg}
                                           error={this.state.git3Error}
                                           name="git3" type="text" variant="outlined"/>
                            </form>
                            <form>
                                <TextField id="outlined-git4" label="GitHub Username" value={this.state.git4}
                                           onChange={this.handleGit4Error} error={this.state.git4Error}
                                           helperText={this.state.git4ErrorMsg}
                                           name="git4" type="text" variant="outlined"/>
                            </form>
                            <div className="">
                                <Button variant="contained" color="primary" onClick={this.handleSubmit}>SUBMIT</Button>
                                <Button/>
                                <Button variant="contained" color="primary" onClick={this.clearAll}>CLEAR</Button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

        );
    }
}

export default UserForm;
