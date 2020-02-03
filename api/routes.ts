enum Section {
    api = "api",
    views = "views"
}

enum Version {
    v1 = "v1"
}

enum Entity {
    users = "users",
    passwords = "passwords",
    roles = "roles",
    userRoles = "userRoles",
    phones = "phones",
    phoneConfirmations = "phoneConfirmations",
    emails = "emails",
    emailConfirmations = "emailConfirmations",
    sessions = "sessions"
}

const getListRoute = (section: Section, version: Version, entity: Entity): string => `${section}/${version}/${entity}`;

const getDetailRoute = (section: Section, version: Version, entity: Entity): ((string) => string) => (id: string) => `${section}/${version}/${entity}/${id}`;

const getRoute = (section: Section, version: Version, entity: Entity) => ({
    list: getListRoute(section, version, entity),
    detail: getDetailRoute(section, version, entity)
});

export const views = {
    v1: {
        users: getRoute(Section.views, Version.v1, Entity.users)
    }
};

export const api = {
    v1: {
        users: getRoute(Section.api, Version.v1, Entity.users),
        passwords: getRoute(Section.api, Version.v1, Entity.passwords),
        roles: getRoute(Section.api, Version.v1, Entity.roles),
        userRoles: getRoute(Section.api, Version.v1, Entity.userRoles),
        phones: getRoute(Section.api, Version.v1, Entity.phones),
        phoneConfirmations: getRoute(Section.api, Version.v1, Entity.phoneConfirmations),
        emails: getRoute(Section.api, Version.v1, Entity.emails),
        emailConfirmations: getRoute(Section.api, Version.v1, Entity.emailConfirmations),
        sessions: getRoute(Section.api, Version.v1, Entity.sessions)
    }
};

const routes = {
    views,
    api
};

export default routes;