export const actions = {
    CHANGE_COMPONENT: "Changes the primary component being displayed"
};

export const changeComponent = component => {
    return {
        type: actions.CHANGE_COMPONENT,
        component
    };
};