import { Component, ElementRef, HostListener, OnInit, Signal, ViewChild, WritableSignal, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { AboutMeComponent } from "../../shared/components/about-me/about-me.component";
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { RouterOutlet } from '@angular/router';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
    standalone: true,
    selector: 'app-home-layout',
    template: `
            <!-- header -->
            <div class="fixed z-10 backdrop-blur-sm top-0 left-0 h-auto w-full max-sm:px-2 ">
                <app-header (scrollIntoViewContent)="scrollToElement()" (toggleAboutMe)="toggleSidebarAboutMe()"></app-header>
            </div>

            <!-- hero -->
            <div #myDiv class="md:mx-5 lg:mx-auto lg:w-4/5 mt-20">
                <app-banner></app-banner>
            </div>

            <!-- main -->
            <div #scrollTarget id="scroll-target" class="sm:mx-6 pt-20 lg:grid lg:grid-cols-3 lg:mx-10 xl:mx-auto xl:w-4/5 gap-6">
                <!-- left -->
                <section class="mb-4 w-full lg:col-span-1 p-1">
                    <!-- about me -->
                    <app-about-me [styleClass]="'border'"></app-about-me>
                </section>

                <!-- right -->
                <section class="w-full lg:col-span-2">
                    <!-- menubar -->
                    <div class="w-full">
                        <p-tabMenu [model]="menuItems" [activeItem]="activeItem()" styleClass="h-auto"></p-tabMenu>
                    </div>
                    <!-- content -->
                    <div class="w-full overflow-hidden">
                        <router-outlet></router-outlet>
                    </div>

                </section>

            </div>
            <!-- footer -->
            <footer class="p-card border-none shadow-none flex items-center gap-4 justify-center flex-col my-6">
                <span class="w-1/2 border"></span>
                <span class="flex gap-2 justify-center items-center mx-4">
                    <img width="23" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFVElEQVR4nO2a+YtVZRjHP6PjzC2HbEbN+iFqqKw0SvopaIcyxazRLLAUKiayRZssCKIy+6HEViTBP6CkX0KwzAVyaXMpLRMyHW2xhbDJFmsWrCYe+r7wcOeec94zc+8dFb9wYO55n3d/lu/znIETOH7RBLQAzwOrgC+BQ0CPHvt7t9pM5magkaMEBWA2sA74B+jN+fwNrAVmAfWDsYGTgEeAH92iuoH1wJO6mQt14sP0NOqdtT0FbFCf0P8HYL4OpyqYAux3C/gYaAVG9GOsU4F7gE/cePuAyVQQdlLL3ITbgYllHH8S8Kkbf2klbud0Ldwm+AuYCwwt9yT8P+ZDQKe77THlGrxZ190rr3MRlcfFwB7N2a41DAij3YDbgFFUD43AB5p7v7SiXyg4dfoIGE71MRzY4tSsXzazzKmTBbtYXAoslHu1vn/Krr4FNgLPAFfmGG+k0wpzALldbDDsGJuoAWYomscGw13AneobYzOd6mfeLTrYhThh3ikLZoib3QLt5JcANwDnSz1szDOBG4EXgZ+c/PuSy0KbM/4oFXvUxYksF3sV8LPkDwB3Rbpli/T3ub6/Atdm9KkFPpO8bSoVBUc7JkZsokeybzpnUAfcBiyXqpmNdAFfA28At2pRyBNt1Bg2VtZmJkv2+yxuNst5iCx1Cqf5ktPz6UX0Jelpl+qFja/U+0PA2JR5a5wnvT1tgesk1Jox2GZ3E0P0LHYL3QnMA8Y5GzHC+IDaTOZfkUd0unZ49v69DAdwr+RWJwk0iVZ3ZxDAGc4mgjqFTXRrIttYEqztYc1lfR7X+3OcZ7LUIC1QmhoeSVpniwYxKp6EGudizbCDOoVNXE0+F9+tPMbszfCsu9E0BLu6qVTjC2q0fCIt2AUXO1T6HWzCbiIvHkyxo8tS+j0tGdOEPlilRktBk7BQMhYnkHcKJ5imTkmwPmtKbOI3BcEkTJPcW6Ua96rRjDIJG4qi63L9NsOuJsZrXlPzPuhQo3GbJATOM7bot3mnamKU5rUQ0AchuJneJ+GwZBoSflcL9c7B9GsjfxwLG+k4XlRrb4Sxry8y9tf12/Lso8bY3x6A+/18AO53bQn3+3uk+zWOlhgQA/9JC4gHXEAMhQmj5XkxtxIBsUWNFitiKMrdRadjhndNjk1c5yjKFXr3XCRF2SS5qUlkLJBGqwAm4RYN8p3zVovcZu7PSK6GiAV3qc9jen+uI42WTqSR20AaT0kSCvpqZcy0W/lQciscjV9UlI+3ySgbROPHiVvtcjT+CZfQhbJpFo2fI7l3UmS4Q0I2aBrOBg5K9mVn6C1KmrISK3Pb16tPnXM0vwDnZRziDsnOTFtgQVXxXpfBxaS6K5yaDVPO8prKQYelMl+Jm01zqe4ZuoFYG5vi1DrzM8R8Ce+ILD4cdHl0a2TxoU520uFS3KxN1LrsMoqkFpxLjQl0zc5mgmt+VYWCC3RTJwNnKRF6xW0+2ERanl58wHvyfBQK1YrOjMDkddcyxS8i7MPn9bMjC3QTnJfL/SljqTuBNP5VatIFwLvORqxi+Y0ojrGDy3MW0tuLGEUuFFxlY8sgFbEbgK1aw9aBfGcc7SL5Nv2uFpqc7e0rxwefZne1pmaXUHlMcHPuVdwqC8Y4NetU1A6xoJyolXfqcup0WrknKTgH0KuCcrm+vtYo2O104y+p9Lf3SUU0ZLtqWo39tIM5jnb0SpXK+bU483baFM3DAnpErxeIhoyX267TM1IfjaZLZpOjOIF2zBus/4CoV1V8tavl5nmOqDA4c7A2UAojlOgsVgVwt7hU+KeaDkX+lZKZmpZPnADHOP4DrY4UB1gwfxQAAAAASUVORK5CYII=">
                    <span class="text-center text-sm">Copyright 2024, All right reserved by SnowCode</span>
                </span>
            </footer>
            `,

    imports: [RouterOutlet, HeaderComponent, BannerComponent, AboutMeComponent, TabMenuModule]
})

export class HomeLayoutComponent implements OnInit {
    @ViewChild('myDiv') myDiv!: ElementRef;
    @ViewChild('scrollTarget') scrollTarget!: ElementRef
    private scrollService = inject(ScrollService)
    isScrolled: Signal<boolean> = this.scrollService.isScrolled
    isAbsolute: Signal<boolean> = this.scrollService.isAbsolute


    menuItems: MenuItem[] = [
        { label: 'Projects', icon: 'pi pi-briefcase', routerLink: 'projects' },
        { label: 'Resume', icon: 'pi pi-address-book', routerLink: 'resume' },
        { label: 'Contact', icon: 'pi pi-envelope', routerLink: 'contact'},
    ]
    activeItem: WritableSignal<MenuItem> = signal(this.menuItems[0])

    ngOnInit() {
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {
        this.scrollService.checkPosition(this.myDiv.nativeElement);
    }

    onSelectItem(menuItem: MenuItem) {
        this.activeItem.set(menuItem)
        console.log('on select item', menuItem)
    }

    toggleSidebarAboutMe() {
        console.log('toggle sidebar about me')
    }

    scrollToElement() {
        console.log('scroll to element')
        this.scrollService.scrollToElement(this.scrollTarget)
    }
}