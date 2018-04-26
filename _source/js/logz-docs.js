$('div.feature-box').ready(function() {
  $('div.feature-box.enterprise').append('<span class="available-in">Available in</span><span class="community">Community</span><span class="pro">Pro</span><span class="enterprise yes">Enterprise</span>');
  $('div.feature-box.pro').append('<span class="available-in">Available in</span><span class="community">Community</span><span class="pro yes">Pro</span><span class="enterprise yes">Enterprise</span>');
  $('div.feature-box.community').append('<span class="available-in">Available in</span><span class="community yes">Community</span><span class="pro yes">Pro</span><span class="enterprise yes">Enterprise</span>');
});

$('div.info-box').ready( function() {
  $('div.info-box').contents().wrap('<p></p>');
});
