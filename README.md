
# ng-textarea-autoresize

Do you hate gross HTML scroll bars on your textfield? 
Are you super lazy and want to install a package to never have to see those gross bars again?
Welcome friend you need ***ng-textarea-autoresize*** !

A directive to automatically resize a textarea field based on its contents - death to scroll bars!

## Put it in:

```bash
npm install ng-textarea-autoresize
```

## Hot to make it works:

Add the declaration to your @NgModule:

```typescript
import {Autoresize} from 'ng-textarea-autoresize';

...

@NgModule({
  declarations: [
    Autoresize
  ]
})
```

Once you've done that all you need to do is add the Autoresize directive to your textarea input thusly
```
<textarea [autoresize]>Begone awful scrollbars!</textarea>
```