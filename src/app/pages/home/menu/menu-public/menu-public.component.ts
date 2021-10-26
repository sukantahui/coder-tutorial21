import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {NavItem} from '../../../../models/nav-item';


@Component({
  selector: 'app-menu-public',
  templateUrl: './menu-public.component.html',
  styleUrls: ['./menu-public.component.scss']
})
export class MenuPublicComponent implements OnInit {

  constructor(public authService: AuthService) { }
    showLogin = false;
  navItems: NavItem[] = [
    {
      displayName: 'Language',
      iconName: 'close',
      children: [
        {
          displayName: 'C',
          iconName: 'toc',
          route: 'michael-prentice',
          children: [
            {
              displayName: 'Basic',
              iconName: 'brightness_3',
              route: 'BasicC'
            },
            {
              displayName: 'Medium',
              iconName: 'brightness_2',
              route: 'what-up-web'
            },
            {
              displayName: 'Advance',
              iconName: 'brightness_1',
              route: 'what-up-web'
            }
          ]
        },
        {
          displayName: 'Python',
          iconName: 'person',
          route: 'stephen-fluin',
          children: [
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'star_rate',
              route: 'what-up-web'
            }
          ]
        },
        {
          displayName: 'Java',
          iconName: 'person',
          route: 'stephen-fluin',
          children: [
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'star_rate',
              route: 'what-up-web'
            }
          ]
        },
      ]
    },
    {
      displayName: 'Public 2',
      iconName: 'close',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
      ]
    },
    {
      displayName: 'Services',
      iconName: 'close',
      children: [
        {
          displayName: 'Banking',
          iconName: 'group',
          children: [
            {
              displayName: 'Bank Details',
              iconName: 'star_rate',
              route: '/banking'
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Public 4',
      disabled: true,
      iconName: 'close',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  ngOnInit(): void {
  }
}
