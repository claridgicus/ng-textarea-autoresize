
# ng-textarea-autosize

Do you hate gross HTML scroll bars on your textfield? 
Are you super lazy and want to install a package to never have to see those gross bars again?
Welcome friend you need ***ng-textarea-autosize*** !

A directive to automatically resize a textarea field based on its contents - death to scroll bars!

## Put it in:

```bash
npm install ng-textarea-autosize
```

## How to make it work:

Add the declaration to your @NgModule:

```typescript
import {Autosize} from 'ng-textarea-autosize';

...

@NgModule({
  declarations: [
    Autosize
  ]
})
```

Once you've done that all you need to do is add the Autoresize directive to your textarea input thusly
```
<textarea [autosize]>Begone awful scrollbars!</textarea>
```
