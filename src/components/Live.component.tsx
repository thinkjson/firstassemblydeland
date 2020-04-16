import * as React from "react";

enum LiveService {
    SundayService,
    WednesdayService,
    MegaMen,
}

export class Live extends React.Component {
    megaMen = "https://zoom.us/j/608213572";

    isLiveService() {
        const now = new Date();
        console.log(now.getDay(), now.getHours())
        if (now.getDay() === 4 && now.getHours() >= 18 && now.getHours() < 20) {
            return LiveService.MegaMen;
        } else if (now.getDay() === 6 && now.getHours() >= 10 && now.getHours() < 12) {
            return LiveService.SundayService;
        } else if (now.getDay() === 3 && now.getHours() >= 10 && now.getHours() < 12) {
            return LiveService.WednesdayService;
        }
    }

    render() {
        const isLiveService = this.isLiveService();
        console.log("isLiveService", isLiveService)
        if (isLiveService === LiveService.MegaMen) {
            return (
                <div className="megamen hero">
                    <a href="https://zoom.us/j/608213572" target="_blank">
                        <h2>MEGA Men is live now!</h2>
                        Click here to connect to the Zoom call
                    </a>
                </div>
            );
        }
        return null;
    }
}