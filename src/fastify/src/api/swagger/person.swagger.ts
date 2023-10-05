export const createPersonSchema = {
  schema: {
    description: 'post some data',
    tags: ['Person'],
    summary: 'create a person',
    body: {
      type: 'object',
      properties: {
        userId: { type: 'string', format: 'uuid' },
        gender: { type: 'string' },
        address: { type: 'string' },
        birthdate: { type: 'string', format: 'date-time' },
        biography: { type: 'string' },
        shareableSection: { type: 'string' },
        isOpenToWork: { type: 'boolean' },
        isFreelancer: { type: 'boolean' },
      },
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'string' },
          userId: { type: 'string' },
          gender: { type: 'string' },
          address: { type: 'string' },
          birthdate: { type: 'string', format: 'date-time' },
          biography: { type: 'string' },
          shareableSection: { type: 'string' },
          isOpenToWork: { type: 'boolean' },
          isFreelancer: { type: 'boolean' },
          avatar: { type: 'string' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};

export const listPersonsSchema = {
  schema: {
    description: 'post some data',
    tags: ['Person'],
    summary: 'list a persons',
    response: {},
  },
};

export const getPersonSchema = {
  schema: {
    description: 'post some data',
    tags: ['Person'],
    summary: 'get a person',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          description: 'person id',
        },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          userId: { type: 'string', format: 'uuid' },
          gender: { type: 'string' },
          address: { type: 'string' },
          birthdate: { type: 'string', format: 'date-time' },
          biography: { type: 'string' },
          shareableSection: { type: 'string' },
          isOpenToWork: { type: 'boolean' },
          isFreelancer: { type: 'boolean' },
          avatar: { type: 'string' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};

export const updatePersonSchema = {
  schema: {
    description: 'post some data',
    tags: ['Person'],
    summary: 'update a person',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          description: 'person id',
        },
      },
    },
    body: {
      type: 'object',
      properties: {
        userId: { type: 'string', format: 'uuid' },
        gender: { type: 'string' },
        address: { type: 'string' },
        birthdate: { type: 'string', format: 'date-time' },
        biography: { type: 'string' },
        shareableSection: { type: 'string' },
        isOpenToWork: { type: 'boolean' },
        isFreelancer: { type: 'boolean' },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          userId: { type: 'string', format: 'uuid' },
          gender: { type: 'string' },
          address: { type: 'string' },
          birthdate: { type: 'string', format: 'date-time' },
          biography: { type: 'string' },
          shareableSection: { type: 'string' },
          isOpenToWork: { type: 'boolean' },
          isFreelancer: { type: 'boolean' },
          avatar: { type: 'string' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};

export const deletePersonSchema = {
  schema: {
    description: 'post some data',
    tags: ['Person'],
    summary: 'delete a person',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          description: 'person id',
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

export const getAllPersonsSchema = {
  schema: {
    description: 'post some data',
    tags: ['Person'],
    summary: 'get all a persons',
    response: {},
  },
};

export const updateAvatarPersonSchema = {
  schema: {
    description: 'post some data',
    tags: ['Person'],
    summary: 'update avatar a person',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          description: 'person id',
        },
      },
    },
    body: {
      type: 'object',
      properties: {
        avatar: { type: 'string' },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          userId: { type: 'string', format: 'uuid' },
          gender: { type: 'string' },
          address: { type: 'string' },
          birthdate: { type: 'string', format: 'date-time' },
          biography: { type: 'string' },
          shareableSection: { type: 'string' },
          isOpenToWork: { type: 'boolean' },
          isFreelancer: { type: 'boolean' },
          avatar: { type: 'string' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};