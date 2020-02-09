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

const getListRoute = (domain: string, section: Section, version: Version, entity: Entity): string => `${domain}/${section}/${version}/${entity}`;
const getDetailRoute = (domain: string, section: Section, version: Version, entity: Entity): ((string) => string) => (id: string) => `${domain}/${section}/${version}/${entity}/${id}`;

const getRoute = (domain: string, section: Section, version: Version, entity: Entity) => ({
    list: getListRoute(domain, section, version, entity),
    detail: getDetailRoute(domain, section, version, entity)
});

export const getViewRoutes = (domain: string) => ({
    v1: {
        users: getRoute(domain, Section.views, Version.v1, Entity.users)
    }
});

export const getApiRoutes = (domain: string) => ({
    v1: {
        users: getRoute(domain, Section.api, Version.v1, Entity.users),
        passwords: getRoute(domain, Section.api, Version.v1, Entity.passwords),
        roles: getRoute(domain, Section.api, Version.v1, Entity.roles),
        userRoles: getRoute(domain, Section.api, Version.v1, Entity.userRoles),
        phones: getRoute(domain, Section.api, Version.v1, Entity.phones),
        phoneConfirmations: getRoute(domain, Section.api, Version.v1, Entity.phoneConfirmations),
        emails: getRoute(domain, Section.api, Version.v1, Entity.emails),
        emailConfirmations: getRoute(domain, Section.api, Version.v1, Entity.emailConfirmations),
        sessions: getRoute(domain, Section.api, Version.v1, Entity.sessions)
    }
});

const getRoutes = (domain: string) => ({
    views: getViewRoutes(domain),
    api: getApiRoutes(domain)
});

export default getRoutes;
