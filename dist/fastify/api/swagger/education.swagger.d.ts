export declare const createEducationSchema: {
    schema: {
        description: string;
        tags: string[];
        summary: string;
        body: {
            type: string;
            properties: {
                personId: {
                    type: string;
                    format: string;
                };
                title: {
                    type: string;
                };
                institute: {
                    type: string;
                };
                educationType: {
                    type: string;
                };
                address: {
                    type: string;
                };
                startDate: {
                    type: string;
                    format: string;
                };
                endDate: {
                    type: string;
                    format: string;
                };
                description: {
                    type: string;
                };
                isCurrent: {
                    type: string;
                };
                isVerified: {
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
                    personId: {
                        type: string;
                        format: string;
                    };
                    title: {
                        type: string;
                    };
                    institute: {
                        type: string;
                    };
                    educationType: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                    };
                    description: {
                        type: string;
                    };
                    isCurrent: {
                        type: string;
                    };
                    isVerified: {
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
export declare const listEducationsSchema: {
    schema: {
        description: string;
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
export declare const getEducationSchema: {
    schema: {
        description: string;
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
                    id: {
                        type: string;
                    };
                    personId: {
                        type: string;
                        format: string;
                    };
                    title: {
                        type: string;
                    };
                    institute: {
                        type: string;
                    };
                    educationType: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                    };
                    description: {
                        type: string;
                    };
                    isCurrent: {
                        type: string;
                    };
                    isVerified: {
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
export declare const updateEducationSchema: {
    schema: {
        description: string;
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
                id: {
                    type: string;
                };
                title: {
                    type: string;
                };
                institute: {
                    type: string;
                };
                educationType: {
                    type: string;
                };
                address: {
                    type: string;
                };
                startDate: {
                    type: string;
                    format: string;
                };
                endDate: {
                    type: string;
                    format: string;
                };
                description: {
                    type: string;
                };
                isCurrent: {
                    type: string;
                };
                isVerified: {
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
                    };
                    personId: {
                        type: string;
                        format: string;
                    };
                    title: {
                        type: string;
                    };
                    institute: {
                        type: string;
                    };
                    educationType: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                    };
                    description: {
                        type: string;
                    };
                    isCurrent: {
                        type: string;
                    };
                    isVerified: {
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
export declare const deleteEducationSchema: {
    schema: {
        description: string;
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
