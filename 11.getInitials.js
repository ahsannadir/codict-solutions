// Given a string with two words return the initials with two upper case letters with a dot between them.

function getInitials(name) {
    let arr = name.split(" "), sname = arr[0][0] + '.' + arr[1][0]
    return sname.toUpperCase()
}