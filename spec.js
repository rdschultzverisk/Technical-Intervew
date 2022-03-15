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
        let params = {
            host: 'jsonplaceholder.typicode.com',
            port: 443,
            method: 'GET',
            path: '/users/1'
        };
        
        await httpRequest(params).then(function(body) {
            expect(body.username == 'Bret').toBe(true)
        });
    })
    it('should make sure the second users email is EMAIL', async function(){
        //set the params

        //make the call

        //Check the email

    })

    it('should make the post', async function(){
        let params = {
            host: 'jsonplaceholder.typicode.com',
            port: 443,
            method: 'POST',
            path: '/posts',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        };
        let data = JSON.stringify({
            title: 'Vrsk',
            body: 'Test',
            userId: 1,
          })
        
        await httpRequest(params, data).then(function(body) {
            //Take the response and get the post we just created
        });

    })

    it('build and check the emails', function(){
        


        // let ryanschultz = createEmail('ryanschultz', 'gmail')
        // let seanchristensen = createEmail('seanchristensen', 'verisk')
        // let joshnimis = createEmail('joshnimis', 'xactware', 'org')

        // expect(ryanschultz == 'ryanschultz@gmail.com').toBe(true)
        // expect(seanchristensen == 'seanchristensen@verisk.com').toBe(true)
        // expect(joshnimis == 'joshnimis@xactware.org').toBe(true)

    })

    it('should wait', function(){
        browser.sleep(2000);
    })



  });