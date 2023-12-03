export declare const createPersonSchema: {
    schema: {
        tags: string[];
        summary: string;
        body: {
            type: string;
            properties: {
                userId: {
                    type: string;
                    format: string;
                };
                gender: {
                    type: string;
                };
                address: {
                    type: string;
                };
                birthdate: {
                    type: string;
                    format: string;
                };
                biography: {
                    type: string;
                };
                isOpenToWork: {
                    type: string;
                };
                isFreelancer: {
                    type: string;
                };
            };
        };
        response: {
            201: {
                description: string;
                type: string;
                properties: {
                    id: {
                        type: string;
                    };
                    userId: {
                        type: string;
                    };
                    gender: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    birthdate: {
                        type: string;
                        format: string;
                    };
                    biography: {
                        type: string;
                    };
                    isOpenToWork: {
                        type: string;
                    };
                    isFreelancer: {
                        type: string;
                    };
                    avatar: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
};
export declare const listPersonsSchema: {
    schema: {
        tags: string[];
        summary: string;
        query: {
            type: string;
            properties: {
                filter: {
                    type: string;
                };
                page: {
                    type: string;
                };
                per_page: {
                    type: string;
                };
                sort: {
                    type: string;
                };
                sort_dir: {
                    type: string;
                };
            };
        };
        response: {};
    };
};
export declare const getPersonSchema: {
    schema: {
        tags: string[];
        summary: string;
        params: {
            type: string;
            properties: {
                id: {
                    type: string;
                    format: string;
                    description: string;
                };
            };
        };
        response: {
            200: {
                description: string;
                type: string;
                properties: {
                    userId: {
                        type: string;
                        format: string;
                    };
                    gender: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    birthdate: {
                        type: string;
                        format: string;
                    };
                    biography: {
                        type: string;
                    };
                    isOpenToWork: {
                        type: string;
                    };
                    isFreelancer: {
                        type: string;
                    };
                    avatar: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
};
export declare const updatePersonSchema: {
    schema: {
        tags: string[];
        summary: string;
        params: {
            type: string;
            properties: {
                id: {
                    type: string;
                    format: string;
                    description: string;
                };
            };
        };
        body: {
            type: string;
            properties: {
                userId: {
                    type: string;
                    format: string;
                };
                gender: {
                    type: string;
                };
                address: {
                    type: string;
                };
                birthdate: {
                    type: string;
                    format: string;
                };
                biography: {
                    type: string;
                };
                isOpenToWork: {
                    type: string;
                };
                isFreelancer: {
                    type: string;
                };
            };
        };
        response: {
            200: {
                description: string;
                type: string;
                properties: {
                    userId: {
                        type: string;
                        format: string;
                    };
                    gender: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    birthdate: {
                        type: string;
                        format: string;
                    };
                    biography: {
                        type: string;
                    };
                    isOpenToWork: {
                        type: string;
                    };
                    isFreelancer: {
                        type: string;
                    };
                    avatar: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
};
export declare const deletePersonSchema: {
    schema: {
        tags: string[];
        summary: string;
        params: {
            type: string;
            properties: {
                id: {
                    type: string;
                    format: string;
                    description: string;
                };
            };
        };
        response: {
            200: {
                description: string;
                type: string;
                properties: {};
            };
        };
    };
};
export declare const getAllPersonsSchema: {
    schema: {
        tags: string[];
        summary: string;
        response: {};
    };
};
export declare const updateAvatarPersonSchema: {
    schema: {
        tags: string[];
        summary: string;
        params: {
            type: string;
            properties: {
                id: {
                    type: string;
                    format: string;
                    description: string;
                };
            };
        };
        body: {
            type: string;
            properties: {
                avatar: {
                    type: string;
                };
            };
        };
        response: {
            200: {
                description: string;
                type: string;
                properties: {
                    id: {
                        type: string;
                        format: string;
                    };
                    userId: {
                        type: string;
                        format: string;
                    };
                    gender: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    birthdate: {
                        type: string;
                        format: string;
                    };
                    biography: {
                        type: string;
                    };
                    isOpenToWork: {
                        type: string;
                    };
                    isFreelancer: {
                        type: string;
                    };
                    avatar: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
};
