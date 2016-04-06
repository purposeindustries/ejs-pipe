ejs-pipe
====

There's no official ejs cli:(, so i built one. It reads the ejs file from `process.stdin` and pipes it to `process.stdout`. 

You can pass as many arguments as you want, under the hood ejs-pipe uses [subarg](https://www.npmjs.com/package/subarg) you can pass deeply nested structure to you ejs templates.

# Usage

## Simple

```
echo "Hello I'm <%= name %>" | ejs-pipe --name=oroce
Hello I'm oroce
```

## Nested

```
echo "Hello I'm <%= name.firstName %> <%= name.lastName %> aka <%= name.nick %>" | ejs-pipe --name [ --firstName=Robert --lastName Oroszi --nick=oroce ]
Hello I'm Robert Oroszi aka oroce
```

## Booleans

```
echo "This is all <%= bool %>" | ejs-pipe --bool
This is all true
```

```
echo "This is all <%= bool %>" | ejs-pipe --no-bool
This is all false
```

# LICENSE

MIT
