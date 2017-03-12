import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public workExperiences = [
    {
      employer: 'DealerSocket',
      title: 'Associate Software Engineer',
      dates: '11/2014 - Present',
      description: 'Worked on the DealerSocket CRM web application. Developed full stack which included AngularJS on the front end, NodeJS and .NET Web ' +
      'API on the backend with both MongoDB and SQL databases. Started as a data validation intern, but quickly learned and moved up to a software engineer.'
    },
    {
      employer: 'Brigham Young University',
      title: 'Research Assistant',
      dates: '9/2016 - Present',
      description: 'Worked in a mouse and rat lab doing addiction research. Most recently worked on seeing effects of ethanol on dopamine receptors in the brain and the periphery.'
    },
    {
      employer: 'Pack Physical Therapy',
      title: 'Physical Therapist Technician',
      dates: '4/2012 - 7/2012',
      description: 'Worked with patients recovering from both chronic and acute injuries. Set up patients with electric stimulation and ice. Taught patients ' +
      'how to do stretches and strength building exercises. Maintained patient charts. Operated class 4 laser to aid in fast recovery.'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
