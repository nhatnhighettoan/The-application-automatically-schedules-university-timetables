export enum EnvUrl {
    // auth
    login = '/app/auth/login',
    register = '/app/auth/register',
    // admin
    lesson_admin = '/app/admin/lesson',
    teacher_admin = '/app/admin/teacher',
    room_admin = '/app/admin/room',

    schedule_admin = '/app/admin/schedule',
    scheduleView_admin = '/app/admin/schedule-view/',
    scheduleGenerate_admin = '/app/admin/schedule-generate/',
    
    courseView_admin = '/app/admin/course-view/',
    
    approval_admin = '/app/admin/approval',
    // user
    request_user = '/app/user/request',
    schedule_user = '/app/user/schedule',
    scheduleView_user = '/app/user/schedule-view/',
    courseView_user = '/app/user/course-view/',
    // notification
    notification = '/app/notice/notification',
}
