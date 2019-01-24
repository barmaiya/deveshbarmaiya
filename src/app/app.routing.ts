import {Routes, RouterModule } from '@angular/router'
import {PostsComponent} from './component/posts/posts.component'
import {NotificationsComponent} from './component/notifications/notifications.component'
import {FriendsComponent} from './component/friends/friends.component'
import {SettingsComponent} from './component/settings/settings.component'
import {UserprofilesComponent} from './component/userprofiles/userprofiles.component'
import {NgModule} from '@angular/core'

const routes : Routes =[

    {path : 'home', component : PostsComponent},
    {path : 'profile', component : UserprofilesComponent},
    {path : 'notifications', component : NotificationsComponent},
    {path : 'friends', component : FriendsComponent},
    {path : 'settings', component : SettingsComponent},
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
    

export class AppRoutingModule{}

export const routedComponent =[PostsComponent, UserprofilesComponent, NotificationsComponent, FriendsComponent, SettingsComponent];
