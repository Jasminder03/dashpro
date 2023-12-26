import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Navibar from '../../Components/Navibar/Navibar';
import Sidebar from '../../Components/Sidebar/Sidebar';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Profile = () => {
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
            First: 'John',
            Last: 'Doe',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });



    return (
        <div>
            <Navibar />
            <div className='row'>
                <div className='col-xs-10 col-sm-3'>
                    <Sidebar />
                </div>

                <div className='col-xs-10 col-sm-9'>
                    <div className='text-light mt-3 ms-3'>
                        <h3> CREATE USER</h3>
                        <h4 className='text-success'>Create a new user profile</h4>

                    </div>
                    <div className='text-light'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='d-flex text-light'>
                                <TextField
                                    id="First"
                                    name="First"
                                    label="First Name"
                                    type="Text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    defaultValue="John"
                                    style={{
                                        width: '50%',
                                        color: 'white',
                                        paddingRight: '2rem',
                                        textDecorationColor: 'white',
                                        marginTop: '2rem',
                                        marginRight: '1rem',
                                        backgroundColor: '#4682B4',
                                        borderRadius: '5px'
                                    }}
                                    inputProps={{
                                        style: {
                                            color: 'black',
                                            paddingLeft: '1rem'
                                        }
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: 'black   ',
                                            paddingLeft: "1rem",
                                            fontWeight: '600'
                                        }
                                    }}
                                />
                                <TextField

                                    id="Last"
                                    color='primary'
                                    name="Last"
                                    label="Last Name"
                                    type="Text"
                                    defaultValue='Doe'
                                    style={{
                                        width: '50%',
                                        color: 'white',
                                        paddingRight: '2rem',
                                        textDecorationColor: 'white',
                                        marginTop: '2rem',
                                        backgroundColor: '#4682B4',
                                        borderRadius: '5px'
                                    }}
                                    inputProps={{
                                        style: {
                                            color: 'black',
                                            paddingLeft: '1rem'
                                        }
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: 'black   ',
                                            paddingLeft: "1rem",
                                            fontWeight: '600'
                                        }
                                    }}
                                />

                            </div>
                            <TextField
                                fullWidth
                                margin='normal'
                                id="email"
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                style={{
                                    marginTop: '2rem',
                                    backgroundColor: '#4682B4',
                                    borderRadius: '5px'
                                }}
                                inputProps={{
                                    style: {
                                        color: 'black',
                                        paddingLeft: '1rem'
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: 'black   ',
                                        paddingLeft: "1rem",
                                        fontWeight: '600'
                                    }
                                }}
                            />
                            <TextField
                                fullWidth
                                margin='normal'
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                style={{
                                    marginTop: '2cd rem',
                                    backgroundColor: '#4682B4',
                                    borderRadius: '5px'
                                }}
                                inputProps={{
                                    style: {
                                        color: 'black',
                                        paddingLeft: '1rem'
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: 'black   ',
                                        paddingLeft: "1rem",
                                        fontWeight: '600',
                                    }
                                }}
                            />

                            <TextField
                                fullWidth
                                id="Contact"
                                name="Contact"
                                label="Contact Number"
                                type="Number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                defaultValue="John"
                                style={{
                                    textDecorationColor: 'white',
                                    marginTop: '2rem',
                                    backgroundColor: '#4682B4',
                                    borderRadius: '5px'
                                }}
                                inputProps={{
                                    style: {
                                        color: 'black',
                                        paddingLeft: '1rem'
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: 'black   ',
                                        paddingLeft: "1rem",
                                        fontWeight: '600'
                                    }
                                }}
                            />
                            <TextField
                                fullWidth
                                id="Address"
                                margin='normal'
                                name="Address"
                                label="Address"
                                type="Text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                defaultValue="John"
                                style={{
                                    marginTop: '2rem',
                                    backgroundColor: '#4682B4',
                                    borderRadius: '5px'
                                }}
                                inputProps={{
                                    style: {
                                        color: 'black',
                                        paddingLeft: '1rem'
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: 'black   ',
                                        paddingLeft: "1rem",
                                        fontWeight: '600'
                                    }
                                }}
                            />

                            <Button variant="contained" type="submit" className='mt-5' style={{ color: 'white', backgroundColor: 'green', marginTop: '3rem' }}>
                                Create User
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile