import {AppComponent} from "../../app/app.component";

describe('AppComponent Tests', () => {
    let app:AppComponent;

    beforeEach(() => {
        app = new AppComponent();
        app.add('a sample comment');
    });

    it('First item inthe item should match', () => {
        expect(app.comments[0].title).toBe('a sample comment');
    });

});
