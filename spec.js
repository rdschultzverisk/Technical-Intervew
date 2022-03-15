const httpRequest = require('./request');

describe('angularjs homepage todo list', function() {
    it('should check for try angular button', function(){
      browser.get('https://angularjs.org');

      expect($('[href="https://angular.io"]').isDisplayed()).toBe(true);

    });

    it('should check the learn button', function(){
        expect(element(by.cssContainingText('.dropdown-toggle', 'Learn')).isPresent()).toBe(true)
    })

    it('should check the develop button', function(){
        expect(element(by.cssContainingText('.dropdown-toggle', 'Develop')).isPresent()).toBe(true)
    })

    it('should check the discuss button', function(){
        expect(element(by.cssContainingText('.dropdown-toggle', 'Discuss')).isPresent()).toBe(true)
    })

    it('should click the learn button', function(){
        element(by.cssContainingText('.dropdown-toggle', 'Learn')).click()
    })

    it('should make sure the first users username is Bret', async function(){
        var params = {
            host: 'jsonplaceholder.typicode.com',
            port: 443,
            method: 'GET',
            path: '/users/1'
        };
        
        await httpRequest(params).then(function(body) {
            expect(body.username == 'Bret').toBe(true)
        });
    })
    it('should make sure the second users email is USERNAME', async function(){
        //set the params

        //make the call



    })

    it('build and check the emails', function(){
        


        let ryanschultz = createEmail('ryanschultz', 'gmail')
        let seanchristensen = createEmail('seanchristensen', 'verisk')
        let joshnimis = createEmail('joshnimis', 'xactware', 'org')

        expect(ryanschultz == 'ryanschultz@gmail.com').toBe(true)
        expect(seanchristensen == 'seanchristensen@verisk.com').toBe(true)
        expect(joshnimis == 'joshnimis@xactware.org').toBe(true)

    })

    it('should wait', function(){
        browser.sleep(2000);
    })



  });