import * as Yup from 'yup';

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
    contact: Yup.object({
        civilite: Yup.string().required('Veuillez préciser votre civilité.'),
        nom: Yup.string().required('Veuillez renseigner votre nom.'),
        prenom: Yup.string().required('Veuillez renseigner votre prénom.'),
        codepostal: Yup.string()
            .min(4, "Merci d'entrer un code postal valide")
            .max(5, "Merci d'entrer un code postal valide")
            .required("Merci d'entrer un code postal valide."),
        ville: Yup.string().required('Veuillez préciser votre ville.'),
        email: Yup.string()
            .email('Veuillez renseigner un email valide.')
            .required('Veuillez renseigner votre email.'),
        confirmEmail: Yup.string()
            .oneOf(
                [Yup.ref('email'), ''],
                'Les adresses email renseignées doivent être identiques.'
            )
            .required('Veuillez renseigner un email valide.'),
        telephone: Yup.string()
            .matches(phoneRegExp, "Merci d'entrer un numéro valide (10 chiffres)")
            .min(10, "Merci d'entrer un numéro valide (10 chiffres)")
            .max(10, "Merci d'entrer un numéro valide (10 chiffres)")
            .when('modeDeContact', {
                is: 'par téléphone',
                then: Yup.string().required(
                    'La modalité de contact par téléphone nécessite un numéro de téléphone valide.'
                )
            }),
        modeDeContact: Yup.string().required('Veuillez renseigner une modalité de contact.')
    })
});

export default validationSchema;
