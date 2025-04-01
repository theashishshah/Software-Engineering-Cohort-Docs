export const UserRolesEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN: "project_admin",
    MEMBER: "member",
};

export const AvailableUserRoles = Object.values(UserRolesEnum);

export const TaskStatusEnum = {
    TODO: "todo",
    COMPLETED: "completed",
    IN_PROGRESS: "in-progess",
};

export const AvailableTaskStatus = Object.values(TaskStatusEnum);
