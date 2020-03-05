document.getElementById('vote').addEventListener('click', () =>
{
    document.getElementById('vote-form').style.display = 'flex';
    document.getElementById('voting-form').style.display = 'flex';
});
document.getElementById('viewparty').addEventListener('click', () =>
{
    document.getElementById('viewpart-form').style.display = 'flex';
});
document.getElementById("close-form").addEventListener('click', () =>
{
    document.getElementById('vote-form').style.display = 'none';
});
document.getElementById('viewpolitician').addEventListener('click', () =>
{
    document.getElementById('viewpol-form').style.display = 'flex';
});