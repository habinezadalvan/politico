

document.getElementById('vote').addEventListener('click', () =>
{
    document.getElementById('vote-form').style.display = 'flex';
    document.getElementById('voting-form').style.display = 'flex';
    document.getElementById('viewpart-form').style.display ='none';
    document.getElementById('viewpol-form').style.display = 'none';
    // document.getElementById('table1').style.display = 'none';
});
document.getElementById('viewparty').addEventListener('click', () =>
{
    document.getElementById('vote-form').style.display = 'none';
    document.getElementById('voting-form').style.display = 'none';
    document.getElementById('viewpart-form').style.display ='flex';
    document.getElementById('viewpol-form').style.display = 'none';
    // document.getElementById('table1').style.display = 'none';
});
document.getElementById('viewpol').addEventListener('click', () =>
{
    document.getElementById('vote-form').style.display = 'none';
    document.getElementById('voting-form').style.display = 'none';
    document.getElementById('viewpart-form').style.display ='none';
    document.getElementById('viewpol-form').style.display = 'flex';
    // document.getElementById('table1').style.display = 'none';
});
document.getElementById('politico1').addEventListener('click', () =>{
    document.getElementById('table1').style.display = 'flex';
    document.getElementById('politico1').addEventListener('click', () =>{
        document.getElementById('table1').style.display = 'none';
        document.getElementById('politico1').addEventListener('click', () =>{
            document.getElementById('table1').style.display = 'flex';
            document.getElementById('politico1').addEventListener('click', () =>{
                document.getElementById('table1').style.display = 'none';
                document.getElementById('politico1').addEventListener('click', () =>{
                    document.getElementById('table1').style.display = 'flex';
                    document.getElementById('politico1').addEventListener('click', () =>{
                        document.getElementById('table1').style.display = 'none';
                        document.getElementById('politico1').addEventListener('click', () =>{
                            document.getElementById('table1').style.display = 'flex';
                            });
                    });
                });
            });
        });
    });
});

