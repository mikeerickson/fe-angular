<div ng-init="init()">
  <label for="{{vm.name}}">{{vm.label}}: </label>
  <input
    class="form-control {{vm.class}}"
    type="number"
    name="{{vm.name}}"
    id="{{vm.name}}"
    value="{{vm.value}}"
    />
  Test {{vm.test()}}
</div>
