const flattenFormValues = (formInitialValues) => {
    const flatten = {};
    formInitialValues.questions.forEach((question) => {
        Object.keys(question).forEach((key) => {
            if (typeof question[key] === 'object') {
                Object.keys(question[key]).forEach((subKey) => {
                    flatten[`${key} / ${subKey}`] = question[key][subKey];
                });
            } else {
                flatten[key] = question[key];
            }
        });
    });
    return flatten;
};

const flattenFormValuesSub = (flattenedFormValues) => {
    const flatten = {};
    Object.keys(flattenedFormValues).forEach((key) => {
        Object.keys(flattenedFormValues[key]).forEach((subKey) => {
            flatten[`${key} / ${subKey}`] = flattenedFormValues[key][subKey];
        });
    });

    return flatten;
};

export { flattenFormValues, flattenFormValuesSub };
