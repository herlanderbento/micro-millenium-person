export const createEducationSchema = {
  schema: {
    description: 'post some data',
    tags: ['Educations'],
    summary: 'create a education',
    body: {
      type: 'object',
      properties: {
        personId: { type: 'string', format: 'uuid' },
        title: { type: 'string' },
        institute: { type: 'string' },
        educationType: { type: 'string' },
        address: { type: 'string' },
        startDate: { type: 'string', format: 'date-time' },
        endDate: { type: 'string', format: 'date-time' },
        description: { type: 'string' },
        isCurrent: { type: 'boolean' },
        isVerified: { type: 'boolean' },
      },
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'string' },
          personId: { type: 'string', format: 'uuid' },
          title: { type: 'string' },
          institute: { type: 'string' },
          educationType: { type: 'string' },
          address: { type: 'string' },
          startDate: { type: 'string', format: 'date-time' },
          endDate: { type: 'string', format: 'date-time' },
          description: { type: 'string' },
          isCurrent: { type: 'boolean' },
          isVerified: { type: 'boolean' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};

export const listEducationsSchema = {
  schema: {
    description: 'post some data',
    tags: ['Educations'],
    summary: 'list a educations',
    query: {
      type: 'object',
      properties: {
        filter: {
          type: 'string',
        },
        page: {
          type: 'string',
        },
        per_page: {
          type: 'string',
        },
        sort: {
          type: 'string',
        },
        sort_dir: {
          type: 'string',
        },
      },
    },
    response: {},
  },
};

export const getEducationSchema = {
  schema: {
    description: 'post some data',
    tags: ['Educations'],
    summary: 'get a education',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          description: 'Education id',
        },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'string' },
          personId: { type: 'string', format: 'uuid' },
          title: { type: 'string' },
          institute: { type: 'string' },
          educationType: { type: 'string' },
          address: { type: 'string' },
          startDate: { type: 'string', format: 'date-time' },
          endDate: { type: 'string', format: 'date-time' },
          description: { type: 'string' },
          isCurrent: { type: 'boolean' },
          isVerified: { type: 'boolean' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};

export const updateEducationSchema = {
  schema: {
    description: 'post some data',
    tags: ['Educations'],
    summary: 'update a education',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          description: 'education id',
        },
      },
    },
    body: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        institute: { type: 'string' },
        educationType: { type: 'string' },
        address: { type: 'string' },
        startDate: { type: 'string', format: 'date-time' },
        endDate: { type: 'string', format: 'date-time' },
        description: { type: 'string' },
        isCurrent: { type: 'boolean' },
        isVerified: { type: 'boolean' },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'string' },
          personId: { type: 'string', format: 'uuid' },
          title: { type: 'string' },
          institute: { type: 'string' },
          educationType: { type: 'string' },
          address: { type: 'string' },
          startDate: { type: 'string', format: 'date-time' },
          endDate: { type: 'string', format: 'date-time' },
          description: { type: 'string' },
          isCurrent: { type: 'boolean' },
          isVerified: { type: 'boolean' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};

export const deleteEducationSchema = {
  schema: {
    description: 'post some data',
    tags: ['Educations'],
    summary: 'delete a education',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          description: 'Education id',
        },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {},
      },
    },
  },
};