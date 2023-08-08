const records = [
    {
        id: 1,
        username: "Kukhmirov",
        password: "32167",
        displayName: "test display",
        emails: [
            {
                email: "kukhmirov@gmail.com"
            }
        ],
    },
    {
        id: 2,
        username: "user",
        password: "123456",
        displayName: "admin test descr",
        emails: [
            {
                email: "admin@gmail.com"
            }
        ],
    },
];

exports.findById = ( id, cb ) => {
    process.nextTick(() => {
        const idx = id - 1;
        if(records[idx]) cb(null, records[idx]);
        else cb(new Error(`User ${id} does not exist`));
    });
};

exports.findByUsername = (username, cb) => {
    process.nextTick(() => {
        for(let i = 0; i < records.length; i++) {
            const record = records[i];
            if(record.username === username) {
                return cb(null, record);
            };
        };
        
        return  cb(null, null);
    });
};

exports.verifyPassword = (user, password) => {
    return user.password.trim() === password.trim();
}