export const formConfig = [
    {
        label: 'Profile',
        fields: [
            {
                name: 'age',
                label: 'Age',
                type: 'number',
                validation: { required: true, pattern: /^[0-9]+$/ },
                errorMsg: 'Age must be numeric.',
            },
            {
                name: 'email',
                label: 'Email',
                type: 'email',
                validation: {
                    required: true,
                    pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                },
                errorMsg: 'Invalid email.',
            },
        ],
    },
    {
        label: 'Interest',
        fields: [
            {
                name: 'hobbies',
                label: 'Hobbies (comma separated)',
                type: 'text',
                validation: { required: true },
                errorMsg: 'Enter at least one hobby.',
            },
            {
                name: 'language',
                label: 'Preferred Language',
                type: 'text',
                validation: { required: true },
                errorMsg: 'Required.',
            },
        ],
    },
    {
        label: 'Settings',
        fields: [
            {
                name: 'newsletter',
                label: 'Receive Newsletter',
                type: 'checkbox',
                validation: {},
                errorMsg: '',
            },
        ],
    },
];
