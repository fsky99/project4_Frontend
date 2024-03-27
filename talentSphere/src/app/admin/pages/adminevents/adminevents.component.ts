import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-adminevents',
  templateUrl: './adminevents.component.html',
  styleUrls: ['./adminevents.component.css']
})
export class AdmineventsComponent implements OnInit {
  isAddEventPopupVisible: boolean = false;
  Events: any[] = [];

  constructor(private talent: TalentService) {}

  ngOnInit(): void {
    this.getInfo();
  }


  async getInfo() {
    this.talent.getAllEvents().subscribe((res: any) => {
      this.Events = res.data;
      console.log(this.Events);
    });
  }


  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }


  formatTime(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  toggleStatusPopup() {
    this.isAddEventPopupVisible = !this.isAddEventPopupVisible;

  }
  deleteEvent(eventID:any){
    this.talent.deleteEvent(eventID).subscribe((res:any)=>{
      alert("Event Deleted")
      window.location.reload()
    })
 
  }
}
