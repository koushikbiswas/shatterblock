/**
 * Created by INFLUXIQ-05 on 31-10-2018.
 */


import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {MusicdivisionComponent} from "./musicdivision/musicdivision.component";
import {WebookComponent} from "./webook/webook.component";
import {WhoWeAreComponent} from "./who-we-are/who-we-are.component";
import {MusicvideosComponent} from "./musicvideos/musicvideos.component";
import {ModelandtalentComponent} from "./modelandtalent/modelandtalent.component";
import {TrendingmodelsComponent} from "./trendingmodels/trendingmodels.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManageadminComponent} from "./manageadmin/manageadmin.component";
import {AddadminComponent} from "./addadmin/addadmin.component";
import {MyaccountComponent} from "./myaccount/myaccount.component";
import {AdminleftComponent} from "./adminleft/adminleft.component";
import {EditadminComponent} from "./editadmin/editadmin.component";
import {BrandlistingComponent} from "./brandlisting/brandlisting.component";
import {OfferlistingComponent} from "./offerlisting/offerlisting.component";
import {InfluencerlistingComponent} from "./influencerlisting/influencerlisting.component";
import {InfluencelistComponent} from "./influencelist/influencelist.component";
import {BrandlistComponent} from "./brandlist/brandlist.component";


import {OldhomeComponent} from "./oldhome/oldhome.component";
import {SidemenuComponent} from "./sidemenu/sidemenu.component";
import {EventsComponent} from "./events/events.component";
import {NavbariconComponent} from "./navbaricon/navbaricon.component";
import {PartnersComponent} from "./partners/partners.component";
import {BecomeAModelComponent} from "./become-a-model/become-a-model.component";
import {OurModelsComponent} from "./our-models/our-models.component";
import {ModelProfileComponent} from "./model-profile/model-profile.component";
import {ModelMarketingComponent} from "./model-marketing/model-marketing.component";
import {OldmusicvideosComponent} from "./oldmusicvideos/oldmusicvideos.component";

//import {FooterComponent} from "./footer/footer.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'musicdivision', component: MusicdivisionComponent},
    { path: 'webook', component: WebookComponent},
    { path: 'whoweare', component: WhoWeAreComponent},
    { path: 'musicvideos', component: MusicvideosComponent},
    {path: 'modelandtalent', component: ModelandtalentComponent},
    {path: 'trendingmodels', component: TrendingmodelsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'manageadmin', component: ManageadminComponent},
    {path: 'addadmin', component: AddadminComponent},
    {path: 'myaccount', component: MyaccountComponent},
    {path: 'adminleft', component: AdminleftComponent},
    {path: 'editadmin/:id', component: EditadminComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'brandlisting', component: BrandlistingComponent},
    {path:'offerlisting', component: OfferlistingComponent},
    {path: 'influencerlisting', component: InfluencerlistingComponent},
    {path: 'influencelist', component: InfluencelistComponent},
    {path: 'brandlist', component: BrandlistComponent},
    {path: 'oldhome', component: OldhomeComponent},
    {path: 'sidemenu', component: SidemenuComponent},
    {path: 'events', component: EventsComponent},
    {path: 'navbaricon', component: NavbariconComponent},
    {path: 'partners', component: PartnersComponent},
    {path: 'become-a-model', component: BecomeAModelComponent},
    {path: 'our-models', component: OurModelsComponent},
    {path: 'model-profile', component: ModelProfileComponent},
    {path: 'model-marketing', component: ModelMarketingComponent},
    {path: 'oldmusicvideos', component: OldmusicvideosComponent},

];


export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });
