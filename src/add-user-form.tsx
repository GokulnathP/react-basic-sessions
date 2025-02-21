import {useFormik} from "formik";
import * as Yup from "yup";
import {useTranslation} from "react-i18next";

const AddUserForm = () => {
    const { t: translate } = useTranslation("user");

    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            username: 'username',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required(translate("errors.username")),
            email: Yup.string().email().required(translate("errors.email")),
            password: Yup.string().required(translate("errors.password")),
        }),
        onSubmit: () => {}
    });

    return (
        <div className="form">
            <div className="field">
                <label className="label" htmlFor="username">Username: </label>
                <input className="input" type="text" name="username" id="username" value={values.username} onChange={handleChange}/>
                {touched.username && errors.username && <p className="error">{errors.username}</p>}
            </div>

            <div className="field">
                <label className="label" htmlFor="email">Email: </label>
                <input className="input" type="email" name="email" id="email" value={values.email} onChange={handleChange}/>
                {touched.email && errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="field">
                <label className="label" htmlFor="password">Password: </label>
                <input className="input" type="password" name="password" id="password" value={values.password}
                       onChange={handleChange}/>
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="actions">
                <button className="submit" onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    );
};

export default AddUserForm;
