<div>
  <label for="{{vm.name}}">{{vm.label}}: </label>
  <input
    class="form-control {{vm.class}}"
    type="text"
    name="{{vm.name}}"
    id="{{vm.name}}"
    value="{{vm.value}}"
    />

  <button ng-click="vm.test()">Click</button>
</div>

