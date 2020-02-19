oldq = document.getElementById('fav_3380')
newq = document.getElementById('fav_4255')

if (oldq.className == "favorite" && newq.className == "notfavorite") {
  oldq.click()
  newq.click()
}

alert('Please use version 4 of the AIO query. If you previously had version 3 favorited, v4 should now be in your favorites list.')
