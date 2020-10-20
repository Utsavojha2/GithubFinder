class Github{
    constructor(){
        this.client_id = 'b28c741556170a7a5034';
        this.client_secret = '8358c0ed60673fd2d31158478512e969125c111c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user){
        // in this application we wanna get two responses the profileResp and repoResponses
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
     
      const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();

      const repos = await reposResponse.json();

      return {
          profile ,
          repos
      }
    }


}