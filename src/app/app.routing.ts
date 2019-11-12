import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { AuthGuard } from './core/auth.guard';
import { AdminGuard } from './core/admin.guard';
import { ProjectProfileGuard } from './core/project-profile.guard';
import { CoreModule } from './core/core.module';


import { ReadmePageComponent } from './ui/readme-page/readme-page.component';
import { HomeComponent } from './home/home.component';

// NK
import { ContactsComponent } from './contacts/contacts.component';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { WsRequestsListComponent } from './ws-requests-list/ws-requests-list.component';


import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentEditAddComponent } from './department-edit-add/department-edit-add.component';

import { BotsComponent } from './bots/bots.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';

// FAQ
import { FaqComponent } from './faq/faq.component';
import { FaqEditAddComponent } from './faq-edit-add/faq-edit-add.component';
import { FaqKbComponent } from './faq-kb/faq-kb.component';
import { FaqKbEditAddComponent } from './faq-kb-edit-add/faq-kb-edit-add.component';

import { BotEditAddComponent } from './bot-edit-add/bot-edit-add.component';

import { ProjectEditAddComponent } from './project-edit-add/project-edit-add.component';
// import { RequestsListHistoryComponent } from './requests-list-history/requests-list-history.component';
import { RequestsListHistoryNewComponent } from './requests-list-history-new/requests-list-history-new.component';


// AUTH PAGES
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';
import { HandleInvitationComponent } from './auth/handle-invitation/handle-invitation.component';

import { WidgetComponent } from './widget/widget.component';
import { WidgetDesignComponent } from './widget-design/widget-design.component';

import { ScriptComponent } from './script/script.component';
import { ChannelsComponent } from './channels/channels.component';
import { SocialComponent } from './social/social.component';

import { FaqTestComponent } from './faq-test/faq-test.component';
import { UserEditAddComponent } from './user-edit-add/user-edit-add.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { RoutingPageComponent } from './routing-page/routing-page.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

import { RequestsMsgsComponent } from './requests-msgs/requests-msgs.component';
import { TrainBotComponent } from './requests-msgs/train-bot/train-bot.component';

import { GroupsComponent } from './groups/groups.component';
import { GroupEditAddComponent } from './group-edit-add/group-edit-add.component';
import { GroupsStaticComponent } from './static-pages/groups-static/groups-static.component';


import { ChangePasswordComponent } from './change-password/change-password.component';
import { HoursComponent } from './hours/hours.component';
import { ResetPswComponent } from './reset-psw/reset-psw.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { UsersPendingComponent } from './users-pending/users-pending.component';
import { ActivitiesComponent } from './activities/activities.component';
// import { DashboardComponent} from './dashboard/dashboard.component';
// Andrea
import { ChatComponent } from './chat/chat.component';

import { AnalyticsStaticComponent } from './static-pages/analytics-static/analytics-static.component';
import { ActivitiesStaticComponent } from './static-pages/activities-static/activities-static.component';
import { HoursStaticComponent } from './static-pages/hours-static/hours-static.component';
import { DepartmentsStaticComponent } from './static-pages/departments-static/departments-static.component';


import { AnalyticsComponent } from './analytics/analytics.component';
import { Analytics2Component } from './analytics2/analytics2.component';
import { PanoramicaComponent } from './analytics2/panoramica/panoramica.component';
import { MetricheComponent } from './analytics2/metriche/metriche.component';
import { RealtimeComponent } from './analytics2/realtime/realtime.component';

import { TriggerComponent } from './trigger/trigger.component';
import { TriggerEditComponent } from './trigger/trigger-edit/trigger-edit.component';
import { TriggerAddComponent } from './trigger/trigger-add/trigger-add.component';
// import { UserProfileComponent } from './ui/user-profile/user-profile.component';

/* PRIVATE */
import { PricingComponent } from './pricing/pricing.component';
import { PaymentSuccessPageComponent } from './pricing/payment-success-page/payment-success-page.component';
import { PaymentCanceledPageComponent } from './pricing/payment-canceled-page/payment-canceled-page.component';
import { PaymentsListComponent } from './pricing/payments-list/payments-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { InstallTiledeskComponent } from './install-tiledesk/install-tiledesk.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  /* PRIVATE */
  { path: 'project/:projectid/pricing', component: PricingComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/success', component: PaymentSuccessPageComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/canceled', component: PaymentCanceledPageComponent, canActivate: [AuthGuard] },

  { path: 'table-list', component: TableListComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'upgrade', component: UpgradeComponent },
  // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }

  // CHAT 21
  // PROJECTS IS THE NEW HOME
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  // **** NEW - WIZARD CREATE PROJECT ****
  // { path: 'project/create-project', component: CreateProjectComponent, canActivate: [AuthGuard] },
  
  // FOR CreateProjectComponent I HAVE CREATE TO PATH TO HIDE THE BUTTON 'close' WHEN THE
  // COMPONENT IS CALLED AFTER THE SIGNUP
  // USED AFTER THE SIGNUP
  { path: 'create-project', component: CreateProjectComponent, canActivate: [AuthGuard] },
  // USED WHEN THE USER CLICK ON 'ADD NEW PROJECT' FROM THE NAVBAR
  { path: 'create-new-project', component: CreateProjectComponent, canActivate: [AuthGuard] },
 
  { path: 'project/:projectid/install-tiledesk', component: InstallTiledeskComponent, canActivate: [AuthGuard] },


  { path: 'project/create', component: ProjectEditAddComponent, canActivate: [AuthGuard] },



  // { path: 'project/:projectid/edit', component: ProjectEditAddComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/project-settings/general', component: ProjectEditAddComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/project-settings/payments', component: ProjectEditAddComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/project-settings/auth', component: ProjectEditAddComponent, canActivate: [AuthGuard] },


  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}, // , canDeactivate: [AuthGuard]
  { path: 'project/:projectid/home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-on-invitation/:pendinginvitationemail', component: SignupComponent },
  { path: 'verify/email/:user_id', component: VerifyEmailComponent },

  { path: 'handle-invitation/:pendinginvitationid/:projectname/:adminfirstname/:adminsurname', component: HandleInvitationComponent },
  

  { path: 'project/:projectid/unauthorized', component: UnauthorizedComponent },


  { path: 'userprofile', component: UserProfileComponent },
  // , canActivate: [AuthGuard]
  { path: 'project/:projectid/requests', component: RequestsListComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/wsrequests', component: WsRequestsListComponent, canActivate: [AuthGuard] },
  
  
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },

  { path: 'project/:projectid/chat', component: ChatComponent, canActivate: [AuthGuard] },

  // MESSAGES OF A REQUEST (IT BEFORE WERE DISPLAYED IN A MODAL WINDOW)
  // tslint:disable-next-line:max-line-length
  { path: 'project/:projectid/request/:requestid/messages', component: RequestsMsgsComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/train', component: TrainBotComponent, canActivate: [AuthGuard] },


  // tslint:disable-next-line:max-line-length
  // ARE ALL THE USER OF A PROJECT (e.g. THE USER THAT HAS CREATED THE PROJECT AND THE USERS THAT HE HAS INVITED (THE OTHER MEMBERS OF THE PROJECT))
  { path: 'project/:projectid/users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/user/add', component: UserEditAddComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/user/edit/:projectuserid', component: UserEditAddComponent, canActivate: [AuthGuard] },

  // ARE THE USERS THAT HAVE BEEN INVITED BUT THAT ARE NOT YET REGISTERED IN TILEDESK
  { path: 'project/:projectid/users/pending', component: UsersPendingComponent, canActivate: [AuthGuard] },

  // GROUPS
  // , ProjectProfileGuard
  { path: 'project/:projectid/groups', component: GroupsComponent, canActivate: [AuthGuard, ProjectProfileGuard] },
  // GROUP EDIT/ADD
  { path: 'project/:projectid/group/create', component: GroupEditAddComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/group/edit/:groupid', component: GroupEditAddComponent, canActivate: [AuthGuard] },

  { path: 'project/:projectid/groups-demo', component: GroupsStaticComponent, canActivate: [AuthGuard] },


  // DISPLAY THE PROFILE OF THE MEMBER (USERS WHO HAVE BEEN INVITED)
  { path: 'project/:projectid/member/:memberid', component: UsersProfileComponent, canActivate: [AuthGuard] },
  // DISPLAY THE PROFILE OF THE BOT
  { path: 'project/:projectid/botprofile/:memberid', component: UsersProfileComponent, canActivate: [AuthGuard] },


  // IS THE PROFILE OF THE LOGGED USER
  { path: 'project/:projectid/user-profile', component: UserProfileComponent },

  // IS THE PROFILE OF THE LOGGED USER THAT IS ON THE PROJECTS PAGE (THE USER HAS NOT YET SELECTED A PROJECT)
  { path: 'user-profile', component: UserProfileComponent },

  // FAQKB (i.e. BOT)
  /* path /faqkb commented and duplicated RENAMED IN /bots */
  // { path: 'project/:projectid/faqkb', component: FaqKbComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/bots', component: FaqKbComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/createfaqkb', component: FaqKbEditAddComponent, canActivate: [AuthGuard] },

  { path: 'project/:projectid/editfaqkb/:faqkbid', component: FaqKbEditAddComponent, canActivate: [AuthGuard] },

  // { path: 'faq/:faqkbid', component: FaqComponent, canActivate: [AuthGuard] }, // used to pass the faq kb id from  in faq page

  /* path /faq/:faqkbid' commented and duplicated RENAMED IN /bots/:faqkbid ( used to pass the faq kb id from  in faq page) */
  // { path: 'project/:projectid/faq/:faqkbid', component: FaqComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/bots/:faqkbid', component: FaqComponent, canActivate: [AuthGuard] },

  { path: 'project/:projectid/createfaq/:faqkbid', component: FaqEditAddComponent, canActivate: [AuthGuard] },

  { path: 'project/:projectid/editfaq/:faqkbid/:faqid', component: FaqEditAddComponent, canActivate: [AuthGuard] },

  // TEST-FAQ PAGE
  // { path: 'project/:projectid/faq/test/:remoteFaqKbKey/:faqkbid', component: FaqTestComponent, canActivate: [AuthGuard] },
  // TEST-FAQ PAGE NEW URL
  { path: 'project/:projectid/faq/test/:faqkbid', component: FaqTestComponent, canActivate: [AuthGuard] },

  { path: 'project/:projectid/bots', component: BotsComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/createbot', component: BotEditAddComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/editbot/:botid', component: BotEditAddComponent, canActivate: [AuthGuard] },

  // , ProjectProfileGuard
  { path: 'project/:projectid/analytics/old', component: AnalyticsComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/analytics', component: Analytics2Component, canActivate: [AuthGuard, ProjectProfileGuard] },
  { path: 'project/:projectid/analytics-demo', component: AnalyticsStaticComponent, canActivate: [AuthGuard] },

  // , ProjectProfileGuard
  { path: 'project/:projectid/activities', component: ActivitiesComponent, canActivate: [AuthGuard, ProjectProfileGuard] },
  { path: 'project/:projectid/activities-demo', component: ActivitiesStaticComponent, canActivate: [AuthGuard] },


  // , ProjectProfileGuard
  { path: 'project/:projectid/departments', component: DepartmentsComponent, canActivate: [AuthGuard, ProjectProfileGuard] },
  { path: 'project/:projectid/department/create', component: DepartmentEditAddComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/department/edit/:deptid', component: DepartmentEditAddComponent, canActivate: [AuthGuard] },

  { path: 'project/:projectid/departments-demo', component: DepartmentsStaticComponent, canActivate: [AuthGuard] },


  // HISTORY
  // { path: 'project/:projectid/historyrt', component: RequestsListHistoryComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/history', component: RequestsListHistoryNewComponent, canActivate: [AuthGuard] },

  // TRIGGER
  { path: 'project/:projectid/trigger', component: TriggerComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/trigger/add', component: TriggerAddComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/trigger/:triggerId', component: TriggerEditComponent, canActivate: [AuthGuard] },


  // page RESOURCES (RENAMED WIDGET)   // path: 'project/:projectid/resources'
  { path: 'project/:projectid/widget', component: WidgetComponent, canActivate: [AuthGuard] },

  // { path: 'project/:projectid/widget/design', component: WidgetDesignComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/widget/greetings', component: WidgetDesignComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/widget/callout', component: WidgetDesignComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/widget/appearance', component: WidgetDesignComponent, canActivate: [AuthGuard] },

  { path: 'project/:projectid/script', component: ScriptComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/channels', component: ChannelsComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/social', component: SocialComponent, canActivate: [AuthGuard] },

  { path: 'project/:projectid/routing', component: RoutingPageComponent, canActivate: [AuthGuard] },

  // CHANGE PSWRD if project is defined (use case: THE USER SELECTED A PROJECT)
  { path: 'project/:projectid/user/:userid/password/change', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  // CHANGE PSWRD if project is undefined (use case: THE USER HAS NOT YET SELECTED A PROJECT)
  { path: 'user/:userid/password/change', component: ChangePasswordComponent, canActivate: [AuthGuard] },

  // HOURS
  { path: 'project/:projectid/hours', component: HoursComponent, canActivate: [AuthGuard, ProjectProfileGuard] },
  { path: 'project/:projectid/hours-demo', component: HoursStaticComponent, canActivate: [AuthGuard] },

  // RESET PASSORD (i.e. page forgot psw & reset psw )
  { path: 'forgotpsw', component: ResetPswComponent },
  { path: 'resetpassword/:resetpswrequestid', component: ResetPswComponent },

  { path: 'project/:projectid/contacts', component: ContactsComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/contact/:requesterid', component: ContactDetailsComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/contact/edit/:requesterid', component: ContactEditComponent, canActivate: [AuthGuard] },
  { path: 'project/:projectid/payments', component: PaymentsListComponent, canActivate: [AuthGuard] },

  
  
  { path: 'dashboard', component: DashboardComponent },



];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard, ProjectProfileGuard]
})
export class AppRoutingModule { }
